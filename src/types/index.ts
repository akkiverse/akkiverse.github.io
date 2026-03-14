/** Navigation link item */
export interface NavLink {
  label: string;
  href: string;
}

/** Social media / contact link */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/** Individual skill item */
export interface Skill {
  name: string;
  icon?: string;
}

/** Skill category grouping */
export interface SkillCategory {
  category: string;
  skills: Skill[];
}

/** Work experience entry */
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance';
  achievements: string[];
  technologies: string[];
  logoInitial: string;
  logoColor: string;
}

/** Project entry */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  featured: boolean;
  status: 'active' | 'archived' | 'wip';
  year: string;
}

/** Hobby / personal interest item */
export interface Hobby {
  label: string;
  icon: string;
  description: string;
}

/** Award / recognition entry */
export interface Award {
  id: string;
  title: string;
  company: string;
  date: string;
}

/** Education entry */
export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

/** About section stats */
export interface Stat {
  label: string;
  value: string;
}

/** Full portfolio data shape */
export interface PortfolioData {
  meta: {
    name: string;
    tagline: string;
    roles: string[];
    valueProp: string;
    email: string;
    location: string;
    githubUsername: string;
    resumeUrl: string;
    availableForWork: boolean;
    availabilityNote: string;
  };
  social: SocialLink[];
  about: {
    bio: string[];
    stats: Stat[];
    currentFocus: string;
    hobbies: Hobby[];
  };
  skills: SkillCategory[];
  experience: Experience[];
  awards: Award[];
  education: Education;
  projects: Project[];
}
