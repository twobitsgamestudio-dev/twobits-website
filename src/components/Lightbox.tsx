import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from 'lucide-react';
import type { GameImage } from '../types/game';
import { Modal } from './Modal';

interface LightboxProps {
  images: GameImage[];
  /** Open image index, or null when closed */
  index: number | null;
  title: string;
  onClose: () => void;
  onChange: (index: number) => void;
}

const navButton =
'inline-flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-white/40 text-white transition-[background-color,transform] duration-200 ease-smooth hover:bg-white/10 active:scale-95';

export function Lightbox({ images, index, title, onClose, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastIndex = useRef(0);
  if (index !== null) lastIndex.current = index;
  const current = lastIndex.current;
  const image = images[current];
  const hasMany = images.length > 1;

  const go = (direction: 1 | -1) => onChange((current + direction + images.length) % images.length);

  const handleKey = (event: KeyboardEvent) => {
    if (!hasMany) return;
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
  };

  return (
    <Modal open={index !== null} onClose={onClose} label={`${title} gallery`} initialFocusRef={closeRef} onKeyDown={handleKey}>
      <div className="flex h-full flex-col bg-ink/[0.96] text-white" onClick={onClose}>
        <div className="flex items-center justify-between px-5 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
          <p className="text-[15px] font-normal tabular-nums text-white/70" aria-live="polite">
            {title} · {current + 1} / {images.length}
          </p>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close gallery" className={navButton}>
            <XIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 sm:px-24">
          <AnimatePresence mode="wait" initial={false}>
            {image &&
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full w-auto max-w-full rounded-xl object-contain"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }} />

            }
          </AnimatePresence>
          {hasMany &&
          <>
              <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous image"
              className={`${navButton} absolute left-6 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}>
              
                <ArrowLeftIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next image"
              className={`${navButton} absolute right-6 top-1/2 hidden -translate-y-1/2 sm:inline-flex`}>
              
                <ArrowRightIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </>
          }
        </div>

        <div className="flex items-center justify-between gap-6 px-5 pb-6 pt-4 sm:justify-center sm:px-8" onClick={(e) => e.stopPropagation()}>
          <p className="max-w-[40rem] text-[15px] leading-snug text-white/70 sm:text-center">{image?.alt}</p>
          {hasMany &&
          <div className="flex shrink-0 gap-3 sm:hidden">
              <button type="button" onClick={() => go(-1)} aria-label="Previous image" className={navButton}>
                <ArrowLeftIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next image" className={navButton}>
                <ArrowRightIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>
          }
        </div>
      </div>
    </Modal>);

}