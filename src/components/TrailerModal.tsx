import { useRef } from 'react';
import { XIcon } from 'lucide-react';
import { Modal } from './Modal';

interface TrailerModalProps {
  open: boolean;
  title: string;
  url: string;
  onClose: () => void;
}

export function TrailerModal({ open, title, url, onClose }: TrailerModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  return (
    <Modal open={open} onClose={onClose} label={`${title} trailer`} initialFocusRef={closeRef}>
      <div className="flex h-full flex-col items-center justify-center bg-ink/[0.96] px-5 sm:px-12" onClick={onClose}>
        <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[15px] font-normal text-white/70">{title} — trailer</p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close trailer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-white/40 text-white transition-[background-color] duration-200 ease-smooth hover:bg-white/10">
              
              <XIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl bg-black">
            {open &&
            <iframe
              src={url}
              title={`${title} trailer`}
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen />

            }
          </div>
        </div>
      </div>
    </Modal>);

}