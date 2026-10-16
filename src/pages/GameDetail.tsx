import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImagesIcon, PlayIcon } from 'lucide-react';
import { ArrowLink } from '../components/ArrowLink';
import { Artwork } from '../components/Artwork';
import { Button } from '../components/Button';
import { Gallery } from '../components/Gallery';
import { Lightbox } from '../components/Lightbox';
import { Page } from '../components/Page';
import { Reveal } from '../components/Reveal';
import { TrailerModal } from '../components/TrailerModal';
import { getGameBySlug, getNextGame } from '../utils/games';
import { NotFound } from './NotFound';

export function GameDetail() {
  const { slug } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const game = getGameBySlug(slug);

  if (!game) return <NotFound />;

  const next = getNextGame(game.slug);
  const hero = game.gallery[0] ?? game.banner;
  const openGallery = () => setLightboxIndex(0);

  return (
    <Page title={`${game.title} — Twin Bits`} description={game.metaDescription}>
      <div className="container-site pb-20 pt-2 lg:pb-24 lg:pt-4">
        <section
          aria-labelledby="game-title"
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center lg:gap-10 xl:gap-12">
          
          <div>
            <Reveal>
              <ArrowLink to="/games" direction="back">
                All games
              </ArrowLink>
            </Reveal>
            <Reveal delay={1} className="mt-8 lg:mt-14">
              <p className="eyebrow">{game.category}</p>
              <h1
                id="game-title"
                className="display mt-4 text-[clamp(3.5rem,16vw,6rem)] lg:text-[clamp(3.5rem,5.6vw,6.25rem)]">
                
                {game.title}
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.03em]">
                {game.headline}
              </p>
              <p className="mt-6 max-w-[30rem] text-[clamp(1.125rem,1.45vw,1.375rem)] leading-[1.45]">{game.description}</p>
            </Reveal>
            <Reveal delay={3} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              {game.trailerUrl ?
              <>
                  <Button icon={<PlayIcon aria-hidden="true" className="h-5 w-5 fill-white" />} onClick={() => setTrailerOpen(true)}>
                    Watch trailer
                  </Button>
                  <ArrowLink onClick={openGallery}>View gallery</ArrowLink>
                </> :

              <Button icon={<ImagesIcon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />} onClick={openGallery}>
                  View gallery
                </Button>
              }
            </Reveal>
          </div>

          <Reveal delay={2}>
            <button
              type="button"
              onClick={openGallery}
              aria-label={`Open gallery: ${hero.alt}`}
              className="group block w-full rounded-xl">
              
              <Artwork image={hero} decorative priority sizes="(min-width: 1024px) 64vw, 100vw" className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[2/1]" />
            </button>
          </Reveal>
        </section>

        <section
          aria-labelledby="feature-title"
          className="mt-20 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-x-10 lg:gap-y-8 xl:gap-x-12">
          
          <div className="lg:col-start-1 lg:row-start-1 lg:pt-16">
            <h2 id="feature-title" className="display text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.95]">
              {game.feature.title}
            </h2>
            <p className="mt-4 max-w-[24rem] text-[clamp(1.25rem,1.7vw,1.625rem)] leading-[1.3]">{game.feature.body}</p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Gallery images={game.gallery} title={game.title} onOpen={setLightboxIndex} />
          </div>

          {next &&
          <div className="lg:col-start-1 lg:row-start-2 lg:self-end">
              <ArrowLink to={`/games/${next.slug}`}>
                Next game: <span className="text-accent">{next.title}</span>
              </ArrowLink>
            </div>
          }
        </section>
      </div>

      <Lightbox
        images={game.gallery}
        index={lightboxIndex}
        title={game.title}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex} />
      
      {game.trailerUrl &&
      <TrailerModal open={trailerOpen} title={game.title} url={game.trailerUrl} onClose={() => setTrailerOpen(false)} />
      }
    </Page>);

}