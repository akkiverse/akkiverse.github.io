import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { portfolio } from '@/data/portfolio';

/**
 * Skills section: grouped skill badges animated in on scroll with stagger effect.
 */
export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 bg-bg-secondary/30"
      aria-label="Skills section"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          label="skills"
          title="Tools of the Trade"
          subtitle="Technologies and tools I work with to design, build, and ship production software."
          align="left"
        />

        <div className="flex flex-col gap-10">
          {portfolio.skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.08 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-accent-primary text-xs tracking-widest uppercase">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-border-subtle" />
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIndex * 0.05 + skillIndex * 0.04 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group"
                  >
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-border-subtle bg-bg-card text-text-secondary text-xs font-mono transition-all duration-200 group-hover:border-accent-primary/30 group-hover:text-accent-primary group-hover:bg-accent-dim cursor-default"
                    >
                      {skill.icon && (
                        <span className="text-text-muted text-[10px] group-hover:text-accent-primary/70">
                          .{skill.icon}
                        </span>
                      )}
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
