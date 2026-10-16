import { ArrowLink } from '../components/ArrowLink';
import { Page } from '../components/Page';
import { PixelCharacters } from '../components/PixelCharacters';
import { Reveal } from '../components/Reveal';

export function NotFound() {
  return (
    <Page title="Page not found — Twin Bits" description="This page doesn’t exist.">
      <div className="container-site flex flex-col items-start pb-24 pt-12 lg:pt-20">
        <Reveal>
          <PixelCharacters className="[--px:5px]" />
          <h1 className="display mt-10 text-[clamp(3.5rem,12vw,7.5rem)]">Off the map.</h1>
          <p className="mt-6 max-w-md text-[clamp(1.25rem,1.8vw,1.625rem)] leading-snug">
            We couldn’t find that page. Let’s get you back to the games.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2">
            <ArrowLink to="/">Back home</ArrowLink>
            <ArrowLink to="/games">All games</ArrowLink>
          </div>
        </Reveal>
      </div>
    </Page>);

}