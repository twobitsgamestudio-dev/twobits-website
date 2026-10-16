const LOGO_SVG =
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="3" y="3" width="13" height="13" fill="#0b0b10"/><rect x="16" y="16" width="13" height="13" fill="#0b0b10"/></svg>';

/** Applies the Twin Bits mark as the document favicon. */
export function applyFavicon(): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  link.href = `data:image/svg+xml,${encodeURIComponent(LOGO_SVG)}`;
}