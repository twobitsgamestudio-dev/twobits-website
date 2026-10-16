import { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function FormField({ id, label, error, className = '', children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2.5 block text-[15px] font-normal text-ink">
        {label}
      </label>
      {children}
      {error &&
      <p id={`${id}-error`} className="mt-2 text-[14px] font-normal text-danger">
          {error}
        </p>
      }
    </div>);

}