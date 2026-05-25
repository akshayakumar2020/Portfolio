import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' }
];

const Navbar = ({ isDark, toggleTheme, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#080b12]/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center shadow-lg shadow-cyan-950/20">
            <span className="text-white font-bold text-xl tracking-tighter">AK</span>
          </div>
          <div>
            <div className="font-semibold text-xl tracking-tight">Akshaya Kumar</div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 -mt-1">JAVA BACKEND DEVELOPER</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)} 
              className="nav-link text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-700 hover:border-cyan-300 hover:text-cyan-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-cyan-700 dark:hover:text-cyan-300 transition-all cursor-pointer shadow-sm"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun size={14} className="text-amber-500" />
            ) : (
              <Moon size={14} className="text-cyan-700" />
            )}
            <span>{isDark ? "Dark" : "Light"}</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#080b12] border-t border-zinc-200 dark:border-zinc-800 px-6 py-6 mobile-menu"
          >
            <div className="flex flex-col gap-4 text-sm">
              {navLinks.map(link => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)} 
                  className="text-left py-1 text-zinc-600 dark:text-zinc-300 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
