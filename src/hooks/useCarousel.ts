import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Native scroll-snap carousel logic: touch/trackpad swiping stays native,
 * buttons step to the next/previous snap point, and directions disable
 * automatically when content fits or an end is reached.
 */
export function useCarousel<T extends HTMLElement>() {
  const trackRef = useRef<T>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const reduceMotion = useReducedMotion();

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < max - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => {
      el.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [update]);

  const step = useCallback(
    (direction: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      const items = Array.from(el.children) as HTMLElement[];
      if (items.length === 0) return;
      const origin = items[0].offsetLeft;
      const positions = items.map((item) => item.offsetLeft - origin);
      const current = el.scrollLeft;
      const max = el.scrollWidth - el.clientWidth;
      const target =
      direction === 1 ?
      positions.find((p) => p > current + 4) ?? max :
      [...positions].reverse().find((p) => p < current - 4) ?? 0;
      el.scrollTo({
        left: Math.min(Math.max(target, 0), max),
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    },
    [reduceMotion]
  );

  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

  return { trackRef, canPrev, canNext, prev, next };
}