import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface CommonProps {
  children: ReactNode;
  direction?: 'forward' | 'back';
  className?: string;
  /** Extra screen-reader-only context, e.g. the game name */
  srLabel?: string;
}

type ArrowLinkProps = (CommonProps & {to: string;onClick?: never;}) | (CommonProps & {onClick: () => void;to?: never;});

export function ArrowLink(props: ArrowLinkProps) {
  const { children, direction = 'forward', className = '', srLabel } = props;
  const back = direction === 'back';
  const iconClass = `h-[22px] w-[22px] shrink-0 text-accent transition-transform duration-200 ease-smooth ${
  back ? 'group-hover/link:-translate-x-1' : 'group-hover/link:translate-x-1'}`;


  const content =
  <>
      {back && <ArrowLeftIcon aria-hidden="true" strokeWidth={1.6} className={iconClass} />}
      <span className="relative pb-1">
        {children}
        {srLabel && <span className="sr-only"> {srLabel}</span>}
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[1.5px] bg-accent/35" />
        <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[1.5px] origin-left scale-x-0 bg-accent transition-transform duration-300 ease-smooth group-hover/link:scale-x-100" />
      
      </span>
      {!back && <ArrowRightIcon aria-hidden="true" strokeWidth={1.6} className={iconClass} />}
    </>;


  const classes = `group/link inline-flex min-h-[44px] items-center gap-4 text-[16px] font-normal ${
  back ? 'text-accent' : 'text-ink'} ${
  className}`;

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>);

  }
  return (
    <button type="button" onClick={props.onClick} className={classes}>
      {content}
    </button>);

}