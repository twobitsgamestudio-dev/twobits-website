import React from 'react';
import { games } from '../data/games';
import { GameCard } from '../components/GameCard';
import { Page } from '../components/Page';
import { Reveal } from '../components/Reveal';
import { formatGameCount } from '../utils/games';

export function Games() {
  return (
    <Page title="Games — Twin Bits" description="Small games. Lasting joy. Explore every game from independent studio Twin Bits.">
      <div className="container-site pb-20 pt-8 md:pt-12 lg:pb-24 lg:pt-10">
        <Reveal>
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="display text-[clamp(3.75rem,16vw,5.5rem)] md:text-[clamp(4.75rem,10vw,8.5rem)]">Our games.</h1>
              <p className="mt-4 text-[17px] font-normal tabular-nums">{formatGameCount(games.length)}</p>
            </div>
            <p className="text-[clamp(1.25rem,2vw,2rem)] md:pb-10">Small games. Lasting joy.</p>
          </header>
        </Reveal>

        <ul className="mt-10 grid gap-x-5 gap-y-14 md:mt-12 md:grid-cols-2 lg:gap-y-20">
          {games.map((game, index) =>
          <li key={game.slug}>
              <Reveal delay={1 + Math.min(index, 4)} className="h-full">
                <GameCard game={game} variant="catalogue" headingLevel="h2" priority={index < 2} />
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </Page>);

}