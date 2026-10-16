import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { footerLine, navItems } from '../data/site';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const ease = [0.23, 1, 0.32, 1] as const;

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const content = document.getElementById('site-content');
    content?.setAttribute('inert', '');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frame);
      content?.removeAttribute('inert');
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        id="mobile-menu"
        className="fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col bg-white md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease }}>
        
          <nav aria-label="Mobile" className="container-site flex-1 pt-6">
            <ul>
              {navItems.map((item, index) =>
            <motion.li
              key={item.to}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 + index * 0.045, ease }}>
              
                  <NavLink
                ref={index === 0 ? firstLinkRef : undefined}
                to={item.to}
                className="flex min-h-[76px] items-center justify-between border-b border-line">
                
                    {({ isActive }) =>
                <>
                        <span className="display text-[44px] leading-none">{item.label}</span>
                        <ArrowRightIcon
                    aria-hidden="true"
                    strokeWidth={1.6}
                    className={`h-7 w-7 ${isActive ? 'text-accent' : 'text-ink/30'}`} />
                  
                      </>
                }
                  </NavLink>
                </motion.li>
            )}
            </ul>
          </nav>
          <p className="container-site pb-8 text-[11px] font-normal tracking-[0.22em] text-ink/70">{footerLine}</p>
        </motion.div>
      }
    </AnimatePresence>);

}