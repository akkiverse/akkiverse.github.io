import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { portfolio } from '@/data/portfolio';

/**
 * Experience section: vertical timeline of work history with achievements
 * and tech stack badges.
 */
export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6" aria-label="Experience section">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          label="experience"
          title="Where I've Worked"
          subtitle="A track record of shipping impactful software at companies that move fast and care about quality."
          align="left"
        />

        <div className="relative flex flex-col gap-0">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/40 via-border-subtle to-transparent hidden sm:block"
            aria-hidden="true"
          />

          {portfolio.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center">
                <div
                  className="relative z-10 w-12 h-12 rounded-xl border-2 flex items-center justify-center font-mono font-bold text-lg shrink-0"
                  style={{
                    borderColor: exp.logoColor,
                    background: `${exp.logoColor}20`,
                    color: exp.logoColor,
                    boxShadow: `0 0 15px ${exp.logoColor}30`,
                  }}
                  aria-hidden="true"
                >
                  {exp.logoInitial}
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 p-6 rounded-xl border border-border-subtle bg-bg-card card-hover">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-mono text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-accent-primary font-mono text-sm">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 sm:items-end">
                    <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                      <Calendar size={12} aria-hidden="true" />
                      {exp.startDate} — {exp.endDate}
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                      <MapPin size={12} aria-hidden="true" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                      <Briefcase size={12} aria-hidden="true" />
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="flex flex-col gap-2 mb-5" role="list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                      <span className="text-accent-primary mt-1 shrink-0 font-mono">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
