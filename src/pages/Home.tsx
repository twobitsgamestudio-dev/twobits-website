import React from 'react';
import { games } from '../data/games';
import { ArrowLink } from '../components/ArrowLink';
import { GameCarousel } from '../components/GameCarousel';
import { Page } from '../components/Page';
import { PixelCharacters } from '../components/PixelCharacters';
import { Reveal } from '../components/Reveal';

export function Home() {
  return (
    <Page
      title="Twin Bits — Little games. Lasting joy."
      description="Twin Bits is an independent game studio. Independent games, built for one more round.">
      
      <div className="container-site pb-16 pt-6 md:pt-10 lg:pb-20 lg:pt-1">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10 xl:gap-14">
          <section aria-labelledby="home-title" className="lg:self-center lg:pt-14">
            <Reveal>
              <h1
                id="home-title"
                className="display text-[clamp(4.25rem,21vw,6.5rem)] md:text-[clamp(5.5rem,12vw,8rem)] lg:text-[clamp(4.5rem,7.3vw,7.5rem)]">
                
                <span className="block">
                  <span className="block md:inline lg:block">Little</span>{' '}
                  <span className="block md:inline lg:block">games.</span>
                </span>
                <span className="block">
                  <span className="block md:inline lg:block">Lasting</span>{' '}
                  <span className="block md:inline lg:block">joy.</span>
                </span>
              </h1>
            </Reveal>

            <div className="md:mt-2 md:flex md:items-end md:justify-between md:gap-10 lg:block">
              <Reveal delay={1}>
                <p className="mt-7 text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.3] lg:mt-8 lg:text-[clamp(1.25rem,1.75vw,1.75rem)]">
                  Independent games.
                  <br />
                  Built for one more round.
                </p>
              </Reveal>
              <Reveal delay={2} className="mt-10 flex items-end gap-10 md:mt-0 lg:mt-12 lg:block">
                <PixelCharacters className="[--px:4px] lg:[--px:4.5px]" />
                <div className="lg:mt-9">
                  <ArrowLink to="/studio">Meet the studio</ArrowLink>
                </div>
              </Reveal>
            </div>
          </section>

          <Reveal delay={2}>
            <GameCarousel games={games} />
          </Reveal>
        </div>
      </div>
    </Page>);

}