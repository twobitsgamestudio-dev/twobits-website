import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AlertCircleIcon, ChevronDownIcon, InfoIcon } from 'lucide-react';
import { subjectOptions } from '../data/site';
import { useContactForm } from '../hooks/useContactForm';
import { fieldClasses } from '../utils/formStyles';
import { Button } from './Button';
import { FormField } from './FormField';

export function ContactForm() {
  const { values, errors, status, handleChange, handleBlur, handleSubmit, reset } = useContactForm(subjectOptions[0]);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="flex min-h-[360px] flex-col items-start justify-center"
        role="status">
        
        <h2 ref={successRef} tabIndex={-1} className="display text-[clamp(2.5rem,5vw,4rem)] outline-none">
          Message sent.
        </h2>
        <p className="mt-5 max-w-md text-[clamp(1.125rem,1.5vw,1.375rem)] leading-snug">
          Thanks{values.name ? `, ${values.name.trim().split(' ')[0]}` : ''}. We’ve received your message and will get back to you at{' '}
          <span className="font-normal">{values.email.trim()}</span>.
        </p>
        <Button className="mt-10" onClick={reset}>
          Send another message
        </Button>
      </motion.div>);

  }

  const describedBy = (field: keyof typeof errors) => errors[field] ? `contact-${field}-error` : undefined;
  const submitting = status === 'submitting';

  return (
    <form noValidate onSubmit={handleSubmit} aria-label="Contact form" className="grid gap-x-5 gap-y-7 sm:grid-cols-2">
      <FormField id="contact-name" label="Name" error={errors.name}>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy('name')}
          className={`${fieldClasses(Boolean(errors.name))} h-14`} />
        
      </FormField>

      <FormField id="contact-email" label="Email" error={errors.email}>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          required
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy('email')}
          className={`${fieldClasses(Boolean(errors.email))} h-14`} />
        
      </FormField>

      <FormField id="contact-subject" label="Subject" error={errors.subject} className="sm:col-span-2">
        <div className="relative">
          <select
            id="contact-subject"
            name="subject"
            required
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={describedBy('subject')}
            className={`${fieldClasses(Boolean(errors.subject))} h-14 cursor-pointer appearance-none pr-14`}>
            
            {subjectOptions.map((option) =>
            <option key={option} value={option}>
                {option}
              </option>
            )}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            strokeWidth={1.75}
            className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink" />
          
        </div>
      </FormField>

      <FormField id="contact-message" label="Message" error={errors.message} className="sm:col-span-2">
        <textarea
          id="contact-message"
          name="message"
          required
          rows={8}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          className={`${fieldClasses(Boolean(errors.message))} block min-h-[220px] resize-y py-4 leading-relaxed lg:min-h-[300px]`} />
        
      </FormField>

      <div className="sm:col-span-2 sm:pt-3">
        <Button type="submit" trailingArrow loading={submitting} className="h-[60px] w-full px-9 text-[18px] font-bold sm:w-auto">
          {submitting ? 'Sending…' : 'Send message'}
        </Button>

        <div aria-live="polite" className="mt-5">
          {status === 'unconfigured' &&
          <p className="flex max-w-xl gap-3 rounded-[10px] bg-accent-soft px-4 py-3.5 text-[15px] font-normal leading-snug text-ink">
              <InfoIcon aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={1.75} />
              <span>
                Messages can’t be sent from this site just yet, so nothing was sent. Your message is still here — please try again
                later.
              </span>
            </p>
          }
          {status === 'error' &&
          <p role="alert" className="flex max-w-xl gap-3 rounded-[10px] bg-danger/5 px-4 py-3.5 text-[15px] font-normal leading-snug text-danger">
              <AlertCircleIcon aria-hidden="true" className="mt-0.5 h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
              <span>Something went wrong and your message wasn’t sent. Please check your connection and try again.</span>
            </p>
          }
          {(status === 'idle' || status === 'submitting') &&
          <p className="text-[15px] text-ink/70">{submitting ? 'Sending your message…' : 'Tell us what’s on your mind.'}</p>
          }
        </div>
      </div>
    </form>);

}