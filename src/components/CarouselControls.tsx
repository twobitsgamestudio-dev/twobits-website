import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface CarouselControlsProps {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  /** id of the scrolling element being controlled */
  controls: string;
  /** Noun for the labels, e.g. "games" or "images" */
  label: string;
  tone?: 'light' | 'dark';
}

export function CarouselControls({ canPrev, canNext, onPrev, onNext, controls, label, tone = 'light' }: CarouselControlsProps) {
  const base =
  tone === 'light' ?
  'border-ink text-ink hover:bg-accent-soft' :
  'border-white/50 text-white hover:bg-white/10';
  const classes = `inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] transition-[background-color,opacity,transform] duration-200 ease-smooth active:scale-95 disabled:pointer-events-none disabled:opacity-25 ${base}`;

  return (
    <div className="flex items-center gap-3" role="group" aria-label={`${label} navigation`}>
      <button type="button" className={classes} onClick={onPrev} disabled={!canPrev} aria-controls={controls} aria-label={`Previous ${label}`}>
        <ArrowLeftIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <button type="button" className={classes} onClick={onNext} disabled={!canNext} aria-controls={controls} aria-label={`Next ${label}`}>
        <ArrowRightIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      </button>
    </div>);

}