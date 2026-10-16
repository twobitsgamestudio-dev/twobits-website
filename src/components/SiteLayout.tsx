import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';

export function SiteLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-[15px] focus:font-normal focus:text-white">
        
        Skip to content
      </a>
      <Header />
      <div id="site-content" className="flex flex-1 flex-col">
        <motion.div
          key={location.pathname}
          className="flex flex-1 flex-col"
          initial={{ opacity: 0.98, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
          <Outlet />
        </motion.div>
        <Footer />
      </div>
    </div>);

}