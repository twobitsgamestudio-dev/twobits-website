import { Link } from 'react-router-dom';
import { games } from '../data/games';
import { principles } from '../data/site';
import { ArrowLink } from '../components/ArrowLink';
import { Artwork } from '../components/Artwork';
import { Page } from '../components/Page';
import { Reveal } from '../components/Reveal';

export function Studio() {
  return (
    <Page
      title="Studio — Twin Bits"
      description="Twin Bits is an independent game studio focused on simple ideas, beautiful worlds and that one-more-round feeling.">
      
      <div className="container-site pb-20 pt-8 md:pt-12 lg:pb-24 lg:pt-10">
        <section aria-labelledby="studio-title" className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow">The studio</p>
            <h1
              id="studio-title"
              className="display mt-5 text-[clamp(3.25rem,14.5vw,7.25rem)] lg:mt-6 lg:text-[clamp(4rem,6.9vw,7.5rem)]">
              
              <span className="block">Small team.</span>
              <span className="block">Big ideas.</span>
              <span className="block">Lasting play.</span>
            </h1>
          </Reveal>
          <Reveal delay={2} className="lg:pt-[42px]">
            <p className="max-w-[38rem] text-[clamp(1.25rem,1.9vw,1.75rem)] leading-[1.35]">
              Twin Bits is an independent game studio focused on simple ideas, beautiful worlds and that one-more-round feeling.
            </p>
          </Reveal>
        </section>

        <section aria-label="Our principles" className="mt-20 lg:mt-24">
          <ol className="grid gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-8">
            {principles.map((principle, index) =>
            <li key={principle.number}>
                <Reveal delay={3 + index}>
                  <span className="text-[17px] font-normal tabular-nums text-accent">{principle.number}</span>
                  <h2 className="display mt-2 text-[clamp(1.875rem,2.6vw,2.5rem)] leading-[1] tracking-[-0.035em]">{principle.title}</h2>
                  <p className="mt-3 text-[clamp(1.125rem,1.4vw,1.375rem)] leading-snug">{principle.body}</p>
                </Reveal>
              </li>
            )}
          </ol>
        </section>

        <section aria-label="Our games" className="mt-16 lg:mt-20">
          <div className="flex justify-start sm:justify-end">
            <ArrowLink to="/games">Explore our games</ArrowLink>
          </div>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {games.map((game) =>
            <li key={game.slug}>
                <Link to={`/games/${game.slug}`} className="group block rounded-xl" aria-label={`${game.title} — explore game`}>
                  <Artwork image={game.banner} decorative sizes="(min-width: 768px) 46vw, 100vw" className="aspect-[16/9] md:aspect-[14/5]" />
                </Link>
              </li>
            )}
          </ul>
        </section>
      </div>
    </Page>);

}