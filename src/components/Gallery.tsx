import React, { useId } from 'react';
import type { GameImage } from '../types/game';
import { useCarousel } from '../hooks/useCarousel';
import { Artwork } from './Artwork';
import { CarouselControls } from './CarouselControls';

interface GalleryProps {
  images: GameImage[];
  title: string;
  onOpen: (index: number) => void;
}

export function Gallery({ images, title, onOpen }: GalleryProps) {
  const { trackRef, canPrev, canNext, prev, next } = useCarousel<HTMLUListElement>();
  const trackId = useId();

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4 lg:justify-end">
        <h3 className="text-[15px] font-normal lg:sr-only">
          Gallery <span className="text-ink/50">· {images.length} images</span>
        </h3>
        <CarouselControls
          canPrev={canPrev}
          canNext={canNext}
          onPrev={prev}
          onNext={next}
          controls={trackId}
          label="images" />
        
      </div>
      <ul
        ref={trackRef}
        id={trackId}
        aria-label={`${title} gallery`}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto overscroll-x-contain px-5 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0">
        
        {images.map((image, index) =>
        <li key={image.src} className="w-[72%] shrink-0 snap-start sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-1.5rem)/3)]">
            <button
            type="button"
            onClick={() => onOpen(index)}
            aria-label={`View image ${index + 1} of ${images.length}: ${image.alt}`}
            className="group block w-full rounded-xl">
            
              <Artwork image={image} decorative sizes="(min-width: 1024px) 21vw, (min-width: 640px) 46vw, 72vw" className="aspect-[16/10]" />
            </button>
          </li>
        )}
      </ul>
    </div>);

}