import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollToSection } from '@/utils';
import { portfolio } from '@/data/portfolio';

const NAV_SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact'];

/**
 * Fixed top navigation bar — Python backend engineer aesthetic.
 * Logo reads as a Python import statement, not a JSX component.
 */
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_SECTIONS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

          {/* Logo — Python import style */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary rounded group shrink-0"
            aria-label="Back to top"
          >
            <Terminal size={14} className="text-accent-primary opacity-60" />
            {/* Full import statement only on md+ to avoid overlap on small screens */}
            <span className="font-mono text-sm hidden md:inline">
              <span className="py-keyword">import</span>
              {' '}
              <span className="text-accent-primary font-semibold">abhishek</span>
            </span>
            {/* Compact version for small screens */}
            <span className="font-mono text-sm md:hidden">
              <span className="text-accent-primary font-semibold">abhishek</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {NAV_SECTIONS.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleNavClick(section)}
                  className={`px-4 py-2 font-mono text-xs rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary ${
                    activeSection === section
                      ? 'text-accent-primary bg-accent-dim'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.03]'
                  }`}
                >
                  {activeSection === section && (
                    <span className="text-accent-primary mr-1 opacity-60">#</span>
                  )}
                  {section}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <div className="hidden md:flex items-center">
            <a
              href={portfolio.meta.resumeUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs border border-border-subtle text-text-secondary rounded hover:border-accent-primary/40 hover:text-accent-primary transition-all duration-200"
              aria-label="Download Resume"
            >
              <Download size={12} />
              resume.pdf
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary rounded"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Python accent line on scroll */}
        {scrolled && <div className="py-accent-line" />}
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.22 }}
            className="fixed inset-y-0 right-0 z-40 w-64 bg-bg-secondary/98 backdrop-blur-xl border-l border-border-subtle md:hidden flex flex-col"
          >
            <div className="h-14 flex items-center justify-between px-4 border-b border-border-subtle">
              <span className="font-mono text-xs text-text-muted">navigation.py</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-text-secondary hover:text-text-primary rounded"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>
            <nav className="flex flex-col gap-0.5 p-3 flex-1">
              {NAV_SECTIONS.map((section, i) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(section)}
                  className={`w-full text-left px-3 py-2.5 font-mono text-sm rounded transition-all ${
                    activeSection === section
                      ? 'text-accent-primary bg-accent-dim'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.03]'
                  }`}
                >
                  <span className="text-text-muted mr-2 text-xs">{String(i + 1).padStart(2, '0')}.</span>
                  {section}
                </motion.button>
              ))}
            </nav>
            <div className="p-3 border-t border-border-subtle">
              <a
                href={portfolio.meta.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 font-mono text-xs border border-border-subtle text-text-secondary rounded hover:border-accent-primary/40 hover:text-accent-primary transition-all"
              >
                <Download size={13} />
                resume.pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/70 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
