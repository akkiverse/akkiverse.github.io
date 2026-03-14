import React from 'react';
import { cx } from '@/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'success' | 'warning' | 'python';
  className?: string;
}

/**
 * Small label badge for tech stack tags, status indicators, and skill pills.
 */
export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className }) => {
  const variants: Record<string, string> = {
    accent:  'bg-accent-dim text-accent-primary border border-accent-primary/20',
    neutral: 'bg-white/[0.04] text-text-secondary border border-white/[0.06]',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    python:  'bg-[#3776ab]/10 text-[#6fb3d2] border border-[#3776ab]/20',
  };

  return (
    <span
      className={cx(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-mono',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
