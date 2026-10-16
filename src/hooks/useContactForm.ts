import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import { ContactNotConfiguredError, submitContactMessage } from '../utils/contactSubmission';

export type ContactField = 'name' | 'email' | 'subject' | 'message';
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;
export type ContactStatus = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured';

type FieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const FIELD_ORDER: ContactField[] = ['name', 'email', 'subject', 'message'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';else
  if (!EMAIL_PATTERN.test(values.email.trim()))
  errors.email = 'Please enter a valid email address, like name@example.com.';
  if (!values.subject.trim()) errors.subject = 'Please choose a subject.';
  if (!values.message.trim()) errors.message = 'Please write a message.';else
  if (values.message.trim().length < 10)
  errors.message = 'Please write a little more — at least 10 characters.';
  return errors;
}

export function useContactForm(defaultSubject: string) {
  const initialValues: ContactValues = { name: '', email: '', subject: defaultSubject, message: '' };
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<ContactStatus>('idle');

  const handleChange = (event: ChangeEvent<FieldElement>) => {
    const name = event.target.name as ContactField;
    const next = { ...values, [name]: event.target.value };
    setValues(next);
    if (errors[name] || attempted) {
      setErrors((prev) => ({ ...prev, [name]: validateContact(next)[name] }));
    }
    if (status === 'error') setStatus('idle');
  };

  const handleBlur = (event: FocusEvent<FieldElement>) => {
    const name = event.target.name as ContactField;
    if (!event.target.value.trim() && !attempted) return;
    setErrors((prev) => ({ ...prev, [name]: validateContact(values)[name] }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;
    setAttempted(true);
    const found = validateContact(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      const element = event.currentTarget.elements.namedItem(firstInvalid);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    setStatus('submitting');
    try {
      await submitContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject,
        message: values.message.trim()
      });
      setStatus('success');
    } catch (error) {
      setStatus(error instanceof ContactNotConfiguredError ? 'unconfigured' : 'error');
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setAttempted(false);
    setStatus('idle');
  };

  return { values, errors, status, handleChange, handleBlur, handleSubmit, reset };
}