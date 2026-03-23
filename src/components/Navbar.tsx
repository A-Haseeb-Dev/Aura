import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // Initial theme
    document.documentElement.classList.add('light');
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'py-4 bg-bg-light/98 dark:bg-bg-dark/98 backdrop-blur-2xl border-b border-border-subtle shadow-md' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter text-ink-light dark:text-ink-dark"
        >
          AURA<span className="text-accent-light dark:text-accent-dark">.</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-12">
          {['Work', 'Services', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest font-sans font-medium text-ink-light dark:text-ink-dark hover:opacity-50 transition-opacity"
            >
              {item}
            </motion.a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-subtle transition-colors text-ink-light dark:text-ink-dark"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 text-ink-light dark:text-ink-dark">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-ink-light dark:text-ink-dark">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[60] bg-bg-light dark:bg-bg-dark flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-8 border-b border-border-subtle">
              <div className="text-2xl font-display font-bold tracking-tighter text-ink-light dark:text-ink-dark">
                AURA<span className="text-accent-light dark:text-accent-dark">.</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-ink-light dark:text-ink-dark">
                <X size={24} />
              </button>
            </div>
            <div className="px-6 py-12 flex flex-col space-y-8 flex-grow">
              {['Work', 'Services', 'About', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-serif italic text-ink-light dark:text-ink-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="p-6 border-t border-border-subtle flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest opacity-40">© 2026 Aura Studio</span>
              <div className="flex gap-4">
                <button onClick={toggleTheme} className="p-2 text-ink-light dark:text-ink-dark">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
