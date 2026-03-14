import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, Award, GraduationCap } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { portfolio } from '@/data/portfolio';

/**
 * About section: bio, stats, current focus, hobbies, awards, and education.
 */
export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6" aria-label="About section">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* ── Row 1: Bio + Stats / Avatar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div className="flex flex-col gap-8">
            <SectionHeader label="about me" title="The Story So Far" align="left" />

            <div className="flex flex-col gap-4">
              {portfolio.about.bio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-text-secondary leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 text-text-muted text-sm font-mono">
                <MapPin size={14} className="text-accent-primary" />
                {portfolio.meta.location}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-emerald-400 font-mono text-xs">
                  {portfolio.meta.availabilityNote}
                </span>
              </div>
            </motion.div>

            {/* Current focus */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3 p-4 rounded-lg border border-accent-primary/20 bg-accent-dim"
            >
              <Zap size={16} className="text-accent-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-mono text-xs text-accent-primary uppercase tracking-wider mb-1">
                  Currently focused on
                </p>
                <p className="text-text-primary text-sm">{portfolio.about.currentFocus}</p>
              </div>
            </motion.div>
          </div>

          {/* Right: avatar + stats */}
          <div className="flex flex-col gap-6">
            {/* Avatar — Python logo colour split */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative mx-auto lg:mx-0 w-44 h-44 rounded-xl border border-border-subtle bg-bg-card overflow-hidden"
            >
              <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                {/* Python logo colours on the initials */}
                <div className="flex items-end gap-0 font-mono font-black text-5xl leading-none select-none">
                  <span style={{ color: '#3776ab' }}>A</span>
                  <span style={{ color: '#f5e642' }}>K</span>
                  <span style={{ color: '#3776ab' }}>S</span>
                </div>
                <span className="font-mono text-[10px] text-text-muted tracking-[0.2em] mt-1">
                  python dev
                </span>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {portfolio.about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-lg border border-border-subtle bg-bg-card card-hover text-center"
                >
                  <p className="font-mono text-2xl font-bold text-accent-primary mb-0.5">
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-[11px] font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 2: Education + Awards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl border border-border-subtle bg-bg-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-dim border border-accent-primary/20 flex items-center justify-center">
                <GraduationCap size={18} className="text-accent-primary" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs text-accent-primary uppercase tracking-widest">Education</span>
            </div>
            <h3 className="font-mono font-semibold text-white text-base leading-snug mb-1">
              {portfolio.education.degree}
            </h3>
            <p className="text-accent-primary font-mono text-sm mb-1">{portfolio.education.institution}</p>
            <p className="text-text-muted font-mono text-xs">{portfolio.education.location}</p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-subtle">
              <span className="text-text-muted font-mono text-xs">{portfolio.education.period}</span>
              <span className="text-text-secondary font-mono text-xs">GPA: {portfolio.education.gpa}</span>
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-xl border border-border-subtle bg-bg-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-dim border border-accent-primary/20 flex items-center justify-center">
                <Award size={18} className="text-accent-primary" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs text-accent-primary uppercase tracking-widest">
                Rewards &amp; Recognition
              </span>
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {portfolio.awards.map((award, i) => (
                <motion.li
                  key={award.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono text-xs mt-0.5 shrink-0">▸</span>
                    <p className="text-text-secondary text-xs leading-snug">{award.title}</p>
                  </div>
                  <span className="text-text-muted font-mono text-xs shrink-0">{award.date}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Row 3: Hobbies ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="section-label">// beyond the keyboard</span>
            <div className="flex-1 h-px bg-border-subtle" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {portfolio.about.hobbies.map((hobby, i) => (
              <motion.div
                key={hobby.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border border-border-subtle bg-bg-card card-hover text-center cursor-default"
              >
                <span className="text-3xl" role="img" aria-label={hobby.label}>{hobby.icon}</span>
                <p className="font-mono font-semibold text-white text-sm">{hobby.label}</p>
                <p className="text-text-muted text-xs leading-snug">{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
