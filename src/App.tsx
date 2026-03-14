/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import { ThemeProvider } from './components/ThemeProvider';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <SmoothScroll>
          <ScrollToTop />
          <div className="bg-[#f5f2ed] dark:bg-[#0a0a0a] min-h-screen text-[#1a1a1a] dark:text-[#f5f2ed] selection:bg-[#d4af37] selection:text-white dark:selection:text-black transition-colors duration-500">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </div>
        </SmoothScroll>
      </Router>
    </ThemeProvider>
  );
}
