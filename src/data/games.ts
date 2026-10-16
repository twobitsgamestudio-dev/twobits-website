import type { Game, GameImage } from '../types/game';

const portrait = { width: 848, height: 1264 };
const landscape = { width: 1376, height: 768 };

const stackBanner: GameImage = {
  src: "/7cba781d-0b86-4bcf-bd44-4b758d79e2bd.jpg",
  alt: 'A tower of stacked glass apartments glowing warmly on a pier above calm water at sunset',
  ...landscape
};

const snowBanner: GameImage = {
  src: "/c25089ac-c5d4-44a2-aada-c4c1c9ce3147.jpg",
  alt: 'A skier in an orange jacket carving through fresh powder above a blue alpine lake',
  ...landscape
};

export const games: Game[] = [
{
  slug: 'stack-city',
  title: 'Stack City',
  genre: 'Stacking',
  category: 'City stacking',
  tagline: 'Build higher. Find your rhythm.',
  headline: 'Find your rhythm.',
  description:
  'Stack glass apartments into a skyline above calm water. Time each drop, keep the balance and watch the evening lights come on.',
  feature: {
    title: 'A quiet rise.',
    body: 'Golden light, steady hands and the joy of one more floor.'
  },
  cover: {
    src: "/3fef4499-d87f-48a7-814a-301b1b9645e2.jpg",
    alt: 'A tall tower of offset glass apartments with warm lit windows, standing on a pier in a golden-hour lake',
    ...portrait
  },
  banner: stackBanner,
  gallery: [
  stackBanner,
  {
    src: "/c33753b8-f4d1-4813-b3a3-fe717e3d6bf5.jpg",
    alt: 'The stacked tower at blue hour, its golden windows mirrored in still water',
    ...landscape
  },
  {
    src: "/41b4a44c-ff5e-443a-abef-b5b8532a13b9.jpg",
    alt: 'Close view of cantilevered apartments with cosy lit interiors and balcony trees',
    ...landscape
  },
  {
    src: "/48fa546c-9f6d-421c-a77b-cb870db693e4.jpg",
    alt: 'A slender stacked tower over misty water at sunrise with a small sailboat nearby',
    ...landscape
  }],

  metaDescription:
  'Stack City by Twin Bits — stack glass apartments into a calm golden-hour skyline. Build higher. Find your rhythm.'
},
{
  slug: 'snowline',
  title: 'Snowline',
  genre: 'Skiing',
  category: 'Snow sports',
  tagline: 'Find your line. Find your flow.',
  headline: 'Find your flow.',
  description:
  'Carve your own line through quiet alpine landscapes. Chase a smoother run, one turn at a time.',
  feature: {
    title: 'A little escape.',
    body: 'Open slopes, fresh tracks and the joy of one more run.'
  },
  cover: {
    src: "/12c1c28f-1db9-42a9-afed-9c3e35516159.jpg",
    alt: 'A skier in an orange jacket leaving curving tracks below snowy blue mountains',
    ...portrait
  },
  banner: snowBanner,
  gallery: [
  snowBanner,
  {
    src: "/f775acf7-894a-4e43-ac83-2b0ae3d89362.jpg",
    alt: 'Fresh ski tracks on an open slope overlooking a deep blue alpine lake',
    ...landscape
  },
  {
    src: "/442ed645-202e-49d8-9212-9613715e1cf3.jpg",
    alt: 'A skier seen from behind spraying powder on a steep slope',
    ...landscape
  },
  {
    src: "/de6f57e3-6894-4ca4-a187-21f98104eef3.jpg",
    alt: 'The sun setting between snowy peaks, washing the slopes in soft pink light',
    ...landscape
  }],

  metaDescription:
  'Snowline by Twin Bits — carve your own line through quiet alpine landscapes. Find your line. Find your flow.'
}];