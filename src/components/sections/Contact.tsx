import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { portfolio } from '@/data/portfolio';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

const contactDescriptions: Record<string, string> = {
  GitHub: 'See what I\'m building',
  LinkedIn: 'Connect professionally',
  Twitter: 'Follow my thoughts',
  Email: 'Say hello directly',
};

/**
 * Contact section: large clickable cards for each social/contact channel.
 */
export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6" aria-label="Contact section">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <SectionHeader
          label="contact"
          title="Let's Build Something Together"
          subtitle="Whether you have a project in mind, want to collaborate, or just want to chat about technology — I'm always open to a conversation."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolio.social.map((link, i) => {
            const IconComponent = iconMap[link.icon] ?? Mail;
            const description = contactDescriptions[link.platform] ?? '';

            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target={link.platform !== 'Email' ? '_blank' : undefined}
                rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex items-center justify-between p-6 rounded-xl border border-border-subtle bg-bg-card transition-all duration-300 hover:border-accent-primary/40 hover:bg-accent-dim hover:shadow-[0_0_25px_rgba(0,245,212,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label={`Contact via ${link.platform}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg border border-border-subtle bg-bg-secondary flex items-center justify-center group-hover:border-accent-primary/40 group-hover:text-accent-primary transition-all">
                    <IconComponent size={20} className="text-text-secondary group-hover:text-accent-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono font-semibold text-white text-sm">{link.platform}</p>
                    <p className="text-text-muted text-xs">{description}</p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-text-muted group-hover:text-accent-primary group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </motion.a>
            );
          })}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center p-8 rounded-2xl border border-accent-primary/20 bg-accent-dim"
        >
          <p className="font-mono text-accent-primary text-sm uppercase tracking-widest mb-3">
            Preferred contact
          </p>
          <a
            href={`mailto:${portfolio.meta.email}`}
            className="font-mono text-2xl sm:text-3xl font-bold text-white hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
          >
            {portfolio.meta.email}
          </a>
          <p className="text-text-muted text-sm mt-3">
            I typically respond within 24–48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
