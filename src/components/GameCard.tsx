import { Link } from 'react-router-dom';
import type { Game } from '../types/game';
import { Artwork } from './Artwork';
import { ArrowLink } from './ArrowLink';

interface GameCardProps {
  game: Game;
  variant: 'carousel' | 'catalogue';
  priority?: boolean;
  headingLevel?: 'h2' | 'h3';
}

export function GameCard({ game, variant, priority = false, headingLevel = 'h3' }: GameCardProps) {
  const href = `/games/${game.slug}`;
  const Heading = headingLevel;

  if (variant === 'carousel') {
    return (
      <article className="group flex h-full flex-col">
        <Link to={href} tabIndex={-1} aria-hidden="true" className="block">
          <Artwork
            image={game.cover}
            decorative
            priority={priority}
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 82vw"
            className="aspect-[4/5] lg:aspect-[11/16]" />
          
        </Link>
        <Heading className="display mt-5 text-[clamp(2.125rem,3.4vw,3.25rem)] leading-[0.95] lg:mt-6">
          <Link to={href}>{game.title}</Link>
        </Heading>
        <div className="mt-2">
          <ArrowLink to={href} srLabel={game.title}>
            Explore game
          </ArrowLink>
        </div>
      </article>);

  }

  return (
    <article className="group flex h-full flex-col">
      <Link to={href} tabIndex={-1} aria-hidden="true" className="block">
        <Artwork
          image={game.banner}
          decorative
          priority={priority}
          sizes="(min-width: 768px) 46vw, 100vw"
          className="aspect-[4/3] md:aspect-[27/20]" />
        
      </Link>
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 lg:mt-6">
        <Heading className="display text-[clamp(2.25rem,4vw,3.75rem)] leading-[0.95]">
          <Link to={href}>{game.title}</Link>
        </Heading>
        <ArrowLink to={href} srLabel={game.title} className="-mb-2">
          Explore game
        </ArrowLink>
      </div>
      <p className="mt-3 text-[clamp(1.125rem,1.5vw,1.375rem)] leading-snug">{game.tagline}</p>
      <p className="eyebrow mt-3 text-ink/60">{game.genre}</p>
    </article>);

}