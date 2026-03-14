import React from 'react';
import { cx } from '@/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: 'primary' | 'outline' | 'ghost';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Renders as an anchor tag */
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

/**
 * Reusable button component with primary, outline, and ghost variants.
 * Supports rendering as an anchor for external links.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  children,
  className,
  ...rest
}) => {
  const base =
    'inline-flex items-center gap-2 font-mono font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary cursor-pointer select-none';

  const variants: Record<string, string> = {
    primary:
      'bg-accent-primary text-bg-primary hover:bg-accent-secondary active:scale-95 shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_30px_rgba(0,245,212,0.5)]',
    outline:
      'border border-accent-primary text-accent-primary hover:bg-accent-dim active:scale-95 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)]',
    ghost: 'text-text-secondary hover:text-accent-primary hover:bg-accent-dim active:scale-95',
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cx(base, variants[variant], sizes[size], className);

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
