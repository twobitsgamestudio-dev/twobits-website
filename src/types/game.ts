export interface GameImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Game {
  /** URL segment used for /games/:slug */
  slug: string;
  title: string;
  /** Short genre label used on cards, e.g. "Skiing" */
  genre: string;
  /** Category label shown above the title on the detail page */
  category: string;
  /** One-line description used on the Games page */
  tagline: string;
  /** Short headline on the detail page */
  headline: string;
  description: string;
  feature: {
    title: string;
    body: string;
  };
  /** Portrait artwork for the homepage carousel */
  cover: GameImage;
  /** Landscape artwork for catalogue, studio strip and detail hero */
  banner: GameImage;
  /** Gallery images (the first is shown as the detail hero) */
  gallery: GameImage[];
  /** Optional trailer embed URL — the Watch trailer action only appears when set */
  trailerUrl?: string;
  /** Add the game's published Google Play URL when available. */
  playStoreUrl?: string;
  metaDescription: string;
}