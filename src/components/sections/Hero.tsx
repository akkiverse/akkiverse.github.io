import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { portfolio } from '@/data/portfolio';
import { scrollToSection } from '@/utils';

/** Single line of Python code rendered with syntax colouring */
const PyLine: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-start gap-3"
  >
    <span className="text-text-muted font-mono text-xs select-none mt-[3px] w-4 text-right shrink-0">
      {/* line numbers filled by parent */}
    </span>
    <span className="font-mono text-sm leading-relaxed">{children}</span>
  </motion.div>
);

/**
 * Hero section styled as a Python REPL / script output.
 * Avoids all web/UI developer visual clichés.
 */
export const Hero: React.FC = () => {
  const { displayText } = useTypewriter({
    words: portfolio.meta.roles,
    typeSpeed: 70,
    deleteSpeed: 35,
    pauseDuration: 2400,
  });

  const lines = [
    { delay: 0.2, content: (
      <span>
        <span className="py-keyword">class </span>
        <span className="py-class">AbhishekSingh</span>
        <span className="text-text-secondary">(Engineer):</span>
      </span>
    )},
    { delay: 0.35, content: (
      <span className="ml-6">
        <span className="py-string">&quot;&quot;&quot;</span>
        <span className="py-string"> Senior Python &amp; GenAI Engineer </span>
        <span className="py-string">&quot;&quot;&quot;</span>
      </span>
    )},
    { delay: 0.5, content: (
      <span className="ml-6">
        <span className="py-keyword">specialisation </span>
        <span className="text-text-secondary">= [</span>
        <span className="py-string">&quot;FastAPI&quot;</span>
        <span className="text-text-secondary">, </span>
        <span className="py-string">&quot;RAG&quot;</span>
        <span className="text-text-secondary">, </span>
        <span className="py-string">&quot;LangChain&quot;</span>
        <span className="text-text-secondary">, </span>
        <span className="py-string">&quot;Django&quot;</span>
        <span className="text-text-secondary">]</span>
      </span>
    )},
    { delay: 0.65, content: (
      <span className="ml-6">
        <span className="py-keyword">experience </span>
        <span className="text-text-secondary">= </span>
        <span className="py-number">6</span>
        <span className="py-comment">  # years</span>
      </span>
    )},
    { delay: 0.8, content: (
      <span className="ml-6">
        <span className="py-keyword">location </span>
        <span className="text-text-secondary">= </span>
        <span className="py-string">&quot;Bangalore, India&quot;</span>
      </span>
    )},
    { delay: 0.95, content: (
      <span className="ml-6">
        <span className="py-keyword">status </span>
        <span className="text-text-secondary">= </span>
        <span className="py-string">&quot;open_to_opportunities&quot;</span>
      </span>
    )},
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden dot-grid"
      aria-label="Hero section"
    >
      {/* Very faint radial behind code block */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,230,66,0.03) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-8">

        {/* Name + role — minimal, not design-y */}
        <div className="flex flex-col gap-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="font-mono text-xs text-text-muted tracking-widest uppercase"
          >
            # Senior Software Engineer · 6+ years
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-mono text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Abhishek Kumar Singh
          </motion.h1>
          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="font-mono text-base sm:text-lg text-text-secondary h-7 flex items-center"
            aria-live="polite"
          >
            <span className="text-accent-primary mr-2 text-sm">$</span>
            <span>{displayText}</span>
            <span className="ml-0.5 w-[2px] h-5 bg-accent-primary inline-block animate-blink" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Terminal code block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="terminal-chrome"
        >
          {/* Chrome bar */}
          <div className="terminal-chrome-bar">
            <span className="terminal-dot" style={{ background: '#ff5f56' }} aria-hidden="true" />
            <span className="terminal-dot" style={{ background: '#ffbd2e' }} aria-hidden="true" />
            <span className="terminal-dot" style={{ background: '#27c93f' }} aria-hidden="true" />
            <span className="font-mono text-[11px] text-text-muted ml-3">profile.py</span>
          </div>

          {/* Code content */}
          <div className="p-5 flex flex-col gap-1.5">
            {lines.map((line, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="font-mono text-[11px] text-text-muted select-none mt-[2px] w-4 text-right shrink-0">
                  {i + 1}
                </span>
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay, duration: 0.35 }}
                  className="font-mono text-sm leading-relaxed"
                >
                  {line.content}
                </motion.div>
              </div>
            ))}
            {/* Blinking cursor line */}
            <div className="flex items-start gap-4">
              <span className="font-mono text-[11px] text-text-muted select-none mt-[2px] w-4 text-right shrink-0">
                {lines.length + 1}
              </span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="font-mono text-sm text-text-muted terminal-cursor"
              />
            </div>
          </div>
        </motion.div>

        {/* Value prop — plain text, no marketing fluff */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-text-secondary text-sm leading-relaxed max-w-xl font-mono"
        >
          <span className="text-text-muted"># </span>
          {portfolio.meta.valueProp}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-5 py-2.5 bg-accent-primary text-bg-primary font-mono font-bold text-sm rounded transition-all duration-200 hover:bg-accent-secondary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
          >
            view_projects()
            <ArrowRight size={14} />
          </button>

          <a
            href={portfolio.meta.resumeUrl}
            download
            className="flex items-center gap-2 px-5 py-2.5 border border-border-subtle text-text-secondary font-mono text-sm rounded transition-all duration-200 hover:border-accent-primary/40 hover:text-accent-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            aria-label="Download Resume PDF"
          >
            <Download size={14} />
            download_resume()
          </a>
        </motion.div>

        {/* Social + availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-4 pt-2 border-t border-border-subtle"
        >
          <div className="flex items-center gap-2">
            {portfolio.social.map((link) => (
              <SocialIcon key={link.platform} link={link} size="sm" />
            ))}
          </div>
          {portfolio.meta.availableForWork && (
            <div className="flex items-center gap-2 ml-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-emerald-400">{portfolio.meta.availabilityNote}</span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary rounded"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={18} className="animate-scroll-down" />
      </motion.button>
    </section>
  );
};
