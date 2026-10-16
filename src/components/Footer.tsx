import React from 'react';
import { footerLine } from '../data/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="container-site">
      <div className="flex flex-col items-start gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between sm:py-5">
        <Logo size="sm" />
        <p className="text-[11px] font-normal tracking-[0.22em] text-ink/75">{footerLine}</p>
      </div>
    </footer>);

}