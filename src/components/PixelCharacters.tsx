
interface PixelCharactersProps {
  /** Set the pixel unit with a Tailwind arbitrary property, e.g. "[--px:4px] lg:[--px:12px]" */
  className?: string;
}

const COLS = 12;
const ROWS = 16;

const BODY = [
'.CSSESSESSC.',
'.SSSESSESSS.',
'..SSSSSSSS..',
'....SSSS....',
'..TTTTTTTT..',
'.TTTTDDTTTT.',
'.TTTTTTTTTT.',
'.STTTTTTTTS.',
'..PPPPPPPP..',
'..PPP..PPP..',
'..PPP..PPP..',
'.BBBB..BBBB.'];


const characters = [
{
  hair: ['...HHHHHH...', '..HHHHHHHHH.', '.HHHHHHHHHH.', '.HHSSSSSSHH.'],
  palette: { H: '#24102b', T: '#5f2aa8', D: '#461d84' }
},
{
  hair: ['....HHHHHH..', '..HHHHHHHHHH', '.HHHHHHHHHH.', '.HHSSSSSHHH.'],
  palette: { H: '#9b6a43', T: '#a35cf2', D: '#7f3fd0' }
}];


const shared: Record<string, string> = {
  S: '#f5c6a3',
  C: '#e6a283',
  E: '#16121c',
  P: '#26133c',
  B: '#140b1f'
};

export function PixelCharacters({ className = '[--px:4px]' }: PixelCharactersProps) {
  return (
    <div
      role="img"
      aria-label="Two pixel-art characters, the Twin Bits mascots"
      className={`group/pixels inline-flex flex-col ${className}`}>
      
      <div className="flex gap-[calc(var(--px)*3)] px-[calc(var(--px)*1)]">
        {characters.map((character, index) => {
          const grid = [...character.hair, ...BODY];
          const colors: Record<string, string> = { ...shared, ...character.palette };
          return (
            <svg
              key={index}
              viewBox={`0 0 ${COLS} ${ROWS}`}
              shapeRendering="crispEdges"
              aria-hidden="true"
              className={`block h-[calc(var(--px)*16)] w-[calc(var(--px)*12)] transition-transform duration-200 ease-smooth group-hover/pixels:-translate-y-[var(--px)] ${
              index === 1 ? 'delay-[60ms]' : ''}`
              }>
              
              {grid.flatMap((row, y) =>
              row.split('').map((cell, x) =>
              cell === '.' ? null :
              <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={colors[cell]} />

              )
              )}
            </svg>);

        })}
      </div>
      <div aria-hidden="true" className="h-[calc(var(--px)*1.25)] rounded-full bg-[#d8d2e8]" />
    </div>);

}