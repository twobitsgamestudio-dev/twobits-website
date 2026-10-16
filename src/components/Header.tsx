import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/site';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const closeAndRestoreFocus = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  return (
    <header className="relative z-50 bg-white">
      <div className="container-site flex h-[72px] items-center justify-between lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-12">
            {navItems.map((item) =>
            <li key={item.to}>
                <NavLink to={item.to} className="group/nav relative inline-flex h-11 items-center text-[15px] text-ink">
                  {({ isActive }) =>
                <>
                      <span className="grid justify-items-center">
                        <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-bold">
                          {item.label}
                        </span>
                        <span className={`col-start-1 row-start-1 ${isActive ? 'font-bold' : 'font-normal'}`}>
                          {item.label}
                        </span>
                      </span>
                      <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-2 h-[1.5px] origin-left scale-x-0 bg-accent transition-transform duration-200 ease-smooth group-hover/nav:scale-x-100" />
                  
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}>
          
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 h-[2px] w-6 bg-ink transition-transform duration-200 ease-smooth ${
              open ? 'top-[5px] rotate-45' : 'top-0'}`
              } />
            
            <span
              className={`absolute left-0 h-[2px] w-6 bg-ink transition-transform duration-200 ease-smooth ${
              open ? 'top-[5px] -rotate-45' : 'top-[10px]'}`
              } />
            
          </span>
        </button>
      </div>

      <MobileMenu open={open} onClose={closeAndRestoreFocus} />
    </header>);

}