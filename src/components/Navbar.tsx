import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from './ThemeProvider';
import logoLight from '../assets/ge-light.png';
import logoDark from '../assets/ge-dark.png';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500',
          isScrolled ? 'bg-[#f5f2ed]/90 dark:bg-black/80 backdrop-blur-md py-4 border-b border-black/10 dark:border-white/10' : 'bg-transparent'
        )}
      >
        <Link to="/" className="relative z-50 group flex items-center gap-3">
          <img 
            src={theme === 'light' ? logoLight : logoDark}
            alt="Gajera Estate Logo"
            className="h-12 w-12 md:h-16 md:w-16 object-contain transition-all duration-500"
          />
          <div className="flex flex-col">
            <h1 className="font-serif text-xl md:text-2xl tracking-widest uppercase text-[#1a1a1a] dark:text-white transition-colors duration-500">
              Gajera <span className="text-[#d4af37] italic">Estate</span>
            </h1>
            <div className="h-[1px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group overflow-hidden"
            >
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/80 dark:text-white/80 transition-colors group-hover:text-[#1a1a1a] dark:group-hover:text-white">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#d4af37] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full border border-black/20 dark:border-white/20 text-[#1a1a1a] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button className="ml-2 px-6 py-2 border border-[#d4af37]/50 rounded-full font-sans text-xs tracking-widest uppercase text-[#d4af37] hover:bg-[#d4af37] hover:text-white dark:hover:text-black transition-all duration-300">
            Enquire
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-50 flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full border border-black/20 dark:border-white/20 text-[#1a1a1a] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="text-[#1a1a1a] dark:text-white transition-colors duration-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#f5f2ed] dark:bg-[#0a0a0a] flex flex-col items-center justify-center transition-colors duration-500"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="font-serif text-4xl text-[#1a1a1a] dark:text-white hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
