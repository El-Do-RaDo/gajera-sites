import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import logoLight from '../assets/ge-light.png';
import logoDark from '../assets/ge-dark.png';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-[#f5f2ed] dark:bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={theme === 'light' ? logoLight : logoDark}
              alt="Gajera Estate Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain transition-all duration-500"
            />
            <h2 className="font-serif text-3xl md:text-5xl">
              Gajera <span className="text-[#d4af37] italic">Estate</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#1a1a1a]/50 dark:text-white/50 max-w-md leading-relaxed transition-colors duration-500">
            Crafting luxury spaces and architectural masterpieces in India. We build not just homes, but legacies of elegance and comfort.
          </p>
        </div>
        
        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-6">Navigation</h3>
          <ul className="space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Projects', path: '/projects' },
              { name: 'About Us', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="font-serif text-lg text-[#1a1a1a]/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors flex items-center group">
                  {item.name}
                  <ArrowUpRight size={16} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-6">Contact</h3>
          <ul className="space-y-4 font-sans text-sm text-[#1a1a1a]/70 dark:text-white/70 transition-colors duration-500">
            <li>Ahmedabad, Gujarat, India</li>
            <li>+91 97269 00111</li>
            <li>info@gajeraestate.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 dark:border-white/10 font-sans text-xs text-[#1a1a1a]/40 dark:text-white/40 transition-colors duration-500">
        <p>&copy; {new Date().getFullYear()} Gajera Estate. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
