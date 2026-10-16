import { games } from '../data/games';
import type { Game } from '../types/game';

export function getGameBySlug(slug: string | undefined): Game | undefined {
  return games.find((game) => game.slug === slug);
}

/** Returns the following game in the catalogue (wrapping), or undefined if there is only one. */
export function getNextGame(slug: string): Game | undefined {
  if (games.length < 2) return undefined;
  const index = games.findIndex((game) => game.slug === slug);
  return games[(index + 1) % games.length];
}

export function formatGameCount(count: number): string {
  return `${String(count).padStart(2, '0')} ${count === 1 ? 'game' : 'games'}`;
}