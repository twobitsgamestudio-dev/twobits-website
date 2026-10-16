import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { FrozenOutlet } from './FrozenOutlet';

export function SiteLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-[15px] focus:font-normal focus:text-white">
        
        Skip to content
      </a>
      <Header />
      <div id="site-content" className="flex flex-1 flex-col">
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.div
            key={location.pathname}
            className="flex flex-1 flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}>
            
            <FrozenOutlet />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>);

}