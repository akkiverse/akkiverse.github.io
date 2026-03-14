import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/**
 * Section heading styled as a Python module docstring / comment block.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
}) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      className={`flex flex-col gap-2 ${alignClass}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <span className="font-mono text-xs text-text-muted tracking-widest">
        # {label}
      </span>
      <h2 className="font-mono text-2xl md:text-3xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="py-accent-line w-12 mt-1" />
    </motion.div>
  );
};

