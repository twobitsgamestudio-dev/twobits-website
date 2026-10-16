import type { GameImage } from '../types/game';

interface ArtworkProps {
  image: GameImage;
  /** Aspect / sizing classes for the frame */
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Empty alt for artwork that is purely decorative next to a visible title */
  decorative?: boolean;
}

/** Rounded artwork frame. Hover zoom is driven by a parent `group`. */
export function Artwork({ image, className = '', priority = false, sizes, decorative = false }: ArtworkProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-canvas [transform:translateZ(0)] ${className}`}>
      <img
        src={image.src}
        alt={decorative ? '' : image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        className="absolute inset-0 h-full w-full select-none object-cover transition-[transform,filter] duration-300 ease-smooth group-hover:scale-[1.03] group-hover:brightness-[1.04] group-hover:contrast-[1.04]" />
      
    </div>);

}