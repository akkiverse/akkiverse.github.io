import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { portfolio } from '@/data/portfolio';
import type { Project } from '@/types';

/** Featured project card — large with more detail */
const FeaturedProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    className="group relative p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-card card-hover overflow-hidden"
    aria-label={`Featured project: ${project.title}`}
  >
    {/* Accent corner glow */}
    <div
      className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at top right, rgba(0,245,212,0.06), transparent 70%)' }}
      aria-hidden="true"
    />

    {/* Status badge */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Zap size={14} className="text-accent-primary" aria-hidden="true" />
        <span className="font-mono text-xs text-accent-primary uppercase tracking-wider">
          Featured Project
        </span>
      </div>
      <span className="font-mono text-xs text-text-muted">{project.year}</span>
    </div>

    <h3 className="font-mono text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
      {project.title}
    </h3>

    <p className="text-text-secondary text-sm leading-relaxed mb-4">
      {project.longDescription ?? project.description}
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies">
      {project.technologies.map((tech) => (
        <Badge key={tech} variant="accent">{tech}</Badge>
      ))}
    </div>

    {/* Links + stats */}
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={16} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>

      <div className="flex items-center gap-3 text-text-muted text-xs font-mono">
        {project.stars !== undefined && (
          <span className="flex items-center gap-1">
            <Star size={12} aria-hidden="true" /> {project.stars}
          </span>
        )}
        {project.forks !== undefined && (
          <span className="flex items-center gap-1">
            <GitFork size={12} aria-hidden="true" /> {project.forks}
          </span>
        )}
      </div>
    </div>
  </motion.article>
);

/** Smaller project card for the grid */
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="group flex flex-col gap-4 p-5 rounded-xl border border-border-subtle bg-bg-card card-hover h-full"
    aria-label={`Project: ${project.title}`}
  >
    <div className="flex items-start justify-between gap-2">
      <h3 className="font-mono text-base font-semibold text-white group-hover:text-accent-primary transition-colors">
        {project.title}
      </h3>
      <div className="flex items-center gap-2 shrink-0">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
            aria-label={`GitHub: ${project.title}`}
          >
            <Github size={16} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded"
            aria-label={`Live demo: ${project.title}`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>

    <p className="text-text-secondary text-sm leading-relaxed flex-1">{project.description}</p>

    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech} variant="neutral">{tech}</Badge>
        ))}
      </div>
      <div className="flex items-center gap-2 text-text-muted text-xs font-mono shrink-0">
        {project.stars !== undefined && (
          <span className="flex items-center gap-1">
            <Star size={11} aria-hidden="true" /> {project.stars}
          </span>
        )}
      </div>
    </div>
  </motion.article>
);

/**
 * Projects section with featured large cards and a smaller grid for other projects.
 */
export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'archived'>('all');

  const featured = portfolio.projects.filter((p) => p.featured);
  const others = portfolio.projects.filter(
    (p) => !p.featured && (filter === 'all' || p.status === filter)
  );

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 bg-bg-secondary/30"
      aria-label="Projects section"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          label="projects"
          title="Things I've Built"
          subtitle="A selection of open-source tools, production systems, and side projects I'm proud of."
          align="left"
        />

        {/* Featured */}
        <div>
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
            ★ Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <FeaturedProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Other projects */}
        <div>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest">
              Other Notable Projects
            </h3>
            <div
              className="flex items-center gap-2 bg-bg-card rounded-lg p-1 border border-border-subtle"
              role="group"
              aria-label="Filter projects"
            >
              {(['all', 'active', 'archived'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-md font-mono text-xs capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary ${
                    filter === f
                      ? 'bg-accent-dim text-accent-primary border border-accent-primary/30'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                  aria-pressed={filter === f}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
