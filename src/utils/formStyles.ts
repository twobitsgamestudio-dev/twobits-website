export function fieldClasses(hasError: boolean): string {
  return [
  'w-full rounded-[10px] border bg-white px-5 text-[17px] font-light text-ink placeholder:text-ink/40',
  'transition-[border-color,box-shadow] duration-150 ease-smooth',
  'focus:outline-none focus-visible:outline-none focus:ring-4',
  hasError ?
  'border-danger focus:border-danger focus:ring-danger/10' :
  'border-field hover:border-ink/40 focus:border-accent focus:ring-accent/10'].
  join(' ');
}