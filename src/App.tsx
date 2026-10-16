import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { SiteLayout } from './components/SiteLayout';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { GameDetail } from './pages/GameDetail';
import { Studio } from './pages/Studio';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy, Terms } from './pages/Legal';
import { applyFavicon } from './utils/favicon';

export function App() {
  useEffect(() => {
    applyFavicon();
  }, []);

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="games" element={<Games />} />
            <Route path="games/:slug" element={<GameDetail />} />
            <Route path="studio" element={<Studio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MotionConfig>
    </BrowserRouter>);

}