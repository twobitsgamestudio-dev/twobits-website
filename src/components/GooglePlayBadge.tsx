
interface GooglePlayBadgeProps {
  href?: string;
  gameTitle: string;
}

export function GooglePlayBadge({ href, gameTitle }: GooglePlayBadgeProps) {
  const badge = (
    <img
      src="/google-play-badge.png"
      alt="Get it on Google Play"
      width={180}
      height={70}
      className="block h-auto w-[180px]"
    />
  );

  if (!href) {
    return (
      <div className="inline-flex flex-col items-start gap-1">
        <button type="button" disabled aria-label={`Google Play download for ${gameTitle} coming soon`} className="cursor-not-allowed opacity-75">
          {badge}
        </button>
        <span className="pl-2 text-xs text-ink/60">Store link coming soon</span>
      </div>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Download ${gameTitle} on Google Play`} className="inline-block rounded-md transition-opacity hover:opacity-80">
      {badge}
    </a>
  );
}
