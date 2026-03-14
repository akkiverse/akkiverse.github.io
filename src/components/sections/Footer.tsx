import React from 'react';
import { ChevronUp } from 'lucide-react';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { portfolio } from '@/data/portfolio';

/**
 * Minimal footer — Python import logo, social links, back to top.
 */
export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-6 px-4 sm:px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <span className="font-mono text-sm">
            <span className="py-keyword">import </span>
            <span className="text-accent-primary font-semibold">abhishek</span>
          </span>
          <span className="text-border-subtle">|</span>
          <p className="text-text-muted font-mono text-xs">
            © {year} {portfolio.meta.name}
          </p>
        </div>

        <div className="flex items-center gap-2" aria-label="Social links">
          {portfolio.social.map((link) => (
            <SocialIcon key={link.platform} link={link} size="sm" />
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-text-muted hover:text-accent-primary border border-border-subtle hover:border-accent-primary/30 rounded transition-all hover:bg-accent-dim focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary"
          aria-label="Back to top"
        >
          <ChevronUp size={12} />
          back_to_top()
        </button>
      </div>
    </footer>
  );
};