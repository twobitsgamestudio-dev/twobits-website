import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRightIcon, Loader2Icon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  trailingArrow?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  icon,
  trailingArrow = false,
  loading = false,
  className = '',
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`group/btn inline-flex h-14 items-center justify-center gap-3 rounded-[10px] bg-ink px-7 text-[17px] font-semibold text-white transition-[background-color,transform] duration-150 ease-smooth hover:bg-[#2a2a33] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-75 disabled:active:scale-100 ${className}`}
      {...rest}>
      
      {loading ? <Loader2Icon aria-hidden="true" className="h-5 w-5 animate-spin" /> : icon}
      <span className="whitespace-nowrap">{children}</span>
      {trailingArrow && !loading &&
      <ArrowRightIcon
        aria-hidden="true"
        strokeWidth={1.75}
        className="h-5 w-5 transition-transform duration-200 ease-smooth group-hover/btn:translate-x-1" />

      }
    </button>);

}