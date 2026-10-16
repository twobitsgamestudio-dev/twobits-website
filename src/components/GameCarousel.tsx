import React, { useId } from 'react';
import type { Game } from '../types/game';
import { useCarousel } from '../hooks/useCarousel';
import { CarouselControls } from './CarouselControls';
import { GameCard } from './GameCard';

interface GameCarouselProps {
  games: Game[];
}

export function GameCarousel({ games }: GameCarouselProps) {
  const { trackRef, canPrev, canNext, prev, next } = useCarousel<HTMLUListElement>();
  const trackId = useId();

  return (
    <section aria-roledescription="carousel" aria-label="Our games" className="flex flex-col">
      <h2 className="sr-only">Our games</h2>
      <div className="order-last mt-6 flex justify-end lg:order-first lg:mb-6 lg:mt-0">
        <CarouselControls
          canPrev={canPrev}
          canNext={canNext}
          onPrev={prev}
          onNext={next}
          controls={trackId}
          label="games" />
        
      </div>
      <ul
        ref={trackRef}
        id={trackId}
        tabIndex={0}
        aria-label="Game list, scroll horizontally"
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto overscroll-x-contain px-5 focus-visible:outline-offset-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0">
        
        {games.map((game, index) =>
        <li
          key={game.slug}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${games.length}`}
          className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)]">
          
            <GameCard game={game} variant="carousel" priority={index < 2} />
          </li>
        )}
      </ul>
    </section>);

}