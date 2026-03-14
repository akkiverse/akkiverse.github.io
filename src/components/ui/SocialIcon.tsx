import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, type LucideIcon } from 'lucide-react';
import type { SocialLink } from '@/types';
import { cx } from '@/utils';

interface SocialIconProps {
  link: SocialLink;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

/**
 * Social icon button — minimal border style matching the Python terminal aesthetic.
 */
export const SocialIcon: React.FC<SocialIconProps> = ({ link, size = 'md', className }) => {
  const IconComponent: LucideIcon = iconMap[link.icon] ?? ExternalLink;
  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 22 : 18;

  const sizeClasses: Record<string, string> = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  return (
    <a
      href={link.url}
      target={link.platform !== 'Email' ? '_blank' : undefined}
      rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
      aria-label={link.platform}
      className={cx(
        'flex items-center justify-center rounded border border-border-subtle text-text-muted',
        'hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-dim',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary',
        sizeClasses[size],
        className
      )}
    >
      <IconComponent size={iconSize} />
    </a>
  );
};
