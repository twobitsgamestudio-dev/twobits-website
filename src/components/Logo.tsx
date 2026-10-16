import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'md' | 'sm';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const isSmall = size === 'sm';
  return (
    <Link
      to="/"
      aria-label="Twin Bits — home"
      className={`group/logo inline-flex min-h-[44px] items-center ${isSmall ? 'gap-2.5' : 'gap-3'} ${className}`}>
      
      <LogoMark className={isSmall ? 'h-5 w-5' : 'h-[26px] w-[26px]'} />
      <span
        className={`font-display font-extrabold leading-none tracking-[-0.035em] text-ink ${
        isSmall ? 'text-[19px]' : 'text-[24px] sm:text-[26px]'}`
        }>
        
        Twin Bits
      </span>
    </Link>);

}

export function LogoMark({ className = '' }: {className?: string;}) {
  return (
    <svg viewBox="0 0 26 26" className={`shrink-0 overflow-visible ${className}`} aria-hidden="true" focusable="false">
      <rect
        x="0"
        y="0"
        width="13"
        height="13"
        className="fill-ink transition-transform duration-200 ease-smooth group-hover/logo:-translate-x-[1.5px] group-hover/logo:-translate-y-[1.5px]" />
      
      <rect
        x="13"
        y="13"
        width="13"
        height="13"
        className="fill-ink transition-transform duration-200 ease-smooth group-hover/logo:translate-x-[1.5px] group-hover/logo:translate-y-[1.5px]" />
      
    </svg>);

}