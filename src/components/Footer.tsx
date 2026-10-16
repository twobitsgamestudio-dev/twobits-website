import { Link } from 'react-router-dom';
import { footerLine } from '../data/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="container-site">
      <div className="flex flex-col items-start gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between sm:py-5">
        <Logo size="sm" />
        <div className="flex flex-col gap-3 sm:items-end">
          <p className="text-[11px] font-normal tracking-[0.22em] text-ink/75">{footerLine}</p>
          <nav aria-label="Legal" className="flex gap-5 text-sm text-ink/70">
            <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>);

}