import type { PortfolioData } from '@/types';

/**
 * Single source of truth for all portfolio content.
 * Update this file to change any personal data — no JSX edits needed.
 */
export const portfolio: PortfolioData = {
  meta: {
    name: 'Abhishek Kumar Singh',
    tagline: '$ whoami',
    roles: [
      'Senior Python Engineer',
      'GenAI & RAG Architect',
      'FastAPI Specialist',
      'Backend Systems Builder',
      'Open Source Contributor',
    ],
    valueProp:
      'Senior Software Engineer with 6+ years specialising in Python backend development and end-to-end Generative AI solutions — from high-performance FastAPI services to production RAG systems that turn knowledge into intelligence.',
    email: 'abhishek.se.contact@gmail.com',
    location: 'Bangalore, KA, India',
    githubUsername: 'AbhishekKumarSingh07',
    resumeUrl: 'https://drive.google.com/uc?export=download&id=1zMRzEDFqyvZ7JEhnj8uZOYELEWIWh6gt',
    availableForWork: true,
    availabilityNote: 'Open to full-time & freelance opportunities',
  },

  social: [
    {
      platform: 'GitHub',
      url: 'https://github.com/AbhishekKumarSingh07',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/abhishek-kumar-singh-07',
      icon: 'linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/akkiverse',
      icon: 'twitter',
    },
    {
      platform: 'Email',
      url: 'mailto:abhishek.se.contact@gmail.com',
      icon: 'mail',
    },
  ],

  about: {
    bio: [
      "I'm a Senior Software Engineer with over 6 years of deep specialisation in Python backend development and Generative AI. My work centres on building scalable, high-performance applications with FastAPI and architecting RAG-based systems that bring real intelligence to knowledge retrieval and business workflows.",
      'At Epam Systems, I architected an internal RAG-based AI agent — "Knowledge Bot" — using LangChain and OpenAI embeddings, and led the modernisation of a critical data service that cut API response times by over 40%. I also engineer backends for high-traffic global financial platforms using Django, and have been recognised with the Best Mentor award for raising engineering quality across the team.',
      "Beyond work, I'm an avid cricket player — it's my sport of choice and I'll try my hand at pretty much any game. I'm equally passionate about food: I love exploring different cuisines from around the world and enjoy recreating those dishes in my own kitchen.",
    ],
    stats: [
      { label: 'Years of Experience', value: '6+' },
      { label: 'Technologies', value: '20+' },
      { label: 'Projects Shipped', value: '15+' },
      { label: 'Awards Received', value: '4+' },
    ],
    currentFocus: 'Building production-grade RAG systems & LLM-powered backend services',
    hobbies: [
      { label: 'Cricket', icon: '🏏', description: 'Favourite sport — on the field whenever possible' },
      { label: 'All Sports', icon: '🏃', description: 'Always up for trying any sport or physical activity' },
      { label: 'Food Explorer', icon: '🍜', description: 'Tasting cuisines from around the world' },
      { label: 'Home Cook', icon: '🍳', description: 'Recreating global dishes in my own kitchen' },
    ],
  },

  skills: [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: 'py' },
        { name: 'SQL', icon: 'sql' },
        { name: 'C++', icon: 'cpp' },
        { name: 'Bash', icon: 'sh' },
      ],
    },
    {
      category: 'Backend Frameworks & Libraries',
      skills: [
        { name: 'FastAPI' },
        { name: 'Django' },
        { name: 'Flask' },
        { name: 'Pydantic' },
        { name: 'SQLAlchemy' },
        { name: 'Pytest' },
        { name: 'REST APIs' },
      ],
    },
    {
      category: 'GenAI & ML',
      skills: [
        { name: 'RAG Pipelines' },
        { name: 'LangChain' },
        { name: 'OpenAI GPT' },
        { name: 'Vector Databases' },
        { name: 'pgvector' },
        { name: 'ChromaDB' },
        { name: 'Embedding Models' },
        { name: 'Prompt Engineering' },
      ],
    },
    {
      category: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'Redis' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (S3, EC2)' },
        { name: 'GCP' },
        { name: 'Docker' },
        { name: 'Jenkins' },
        { name: 'CI/CD' },
        { name: 'Git' },
      ],
    },
    {
      category: 'Core Concepts',
      skills: [
        { name: 'System Design' },
        { name: 'Microservices' },
        { name: 'Async Programming' },
        { name: 'Agile/Scrum' },
      ],
    },
  ],

  experience: [
    {
      id: 'exp-1',
      company: 'Epam Systems',
      role: 'Senior Software Engineer',
      startDate: 'Nov 2021',
      endDate: 'Present',
      location: 'Bangalore, KA',
      type: 'Full-time',
      achievements: [
        'Architected and developed "Knowledge Bot," an internal RAG-based AI agent using LangChain and OpenAI embeddings to query technical documentation — significantly improving developer onboarding and information access across the organisation.',
        'Led the modernisation of a critical data service by designing a new asynchronous application with FastAPI, reducing API response times by over 40%.',
        'Engineered and maintained the backend for a high-traffic global financial trading platform using Django and Wagtail CMS, improving content update workflows for non-technical teams.',
        'Strengthened platform security by directing the remediation of 10+ high-risk vulnerabilities in code dependencies, establishing a more secure technology adoption strategy.',
        'Received the "Best Mentor" award (June 2024) for training and guiding junior engineers in Python best practices, meaningfully improving team productivity and code quality.',
      ],
      technologies: ['Python', 'FastAPI', 'Django', 'LangChain', 'OpenAI', 'pgvector', 'PostgreSQL', 'Docker', 'AWS'],
      logoInitial: 'E',
      logoColor: '#00f5d4',
    },
    {
      id: 'exp-2',
      company: 'Fime',
      role: 'System Engineer',
      startDate: 'May 2021',
      endDate: 'Oct 2021',
      location: 'Bangalore, KA',
      type: 'Full-time',
      achievements: [
        'Contributed to the development of a global payment card testing tool, implementing an upgraded encryption algorithm to meet new regulatory and security standards.',
        'Expanded tool capabilities by adding new test scenarios in line with evolving compliance requirements.',
      ],
      technologies: ['Python', 'C++', 'Encryption', 'Payment Standards'],
      logoInitial: 'F',
      logoColor: '#7c3aed',
    },
    {
      id: 'exp-3',
      company: 'Zensar Technologies',
      role: 'Software Engineer',
      startDate: 'Jun 2019',
      endDate: 'May 2021',
      location: 'Pune, MH',
      type: 'Full-time',
      achievements: [
        'Played a key role in a time-sensitive project for a leading UK-based bank to transition financial accounts from LIBOR to alternative rates ahead of the regulatory deadline.',
        'Developed and tested multiple Bash scripts to automate the rate transition, ensuring a seamless and accurate update across all relevant database objects and legacy applications.',
      ],
      technologies: ['Python', 'Bash', 'SQL', 'PostgreSQL', 'MySQL'],
      logoInitial: 'Z',
      logoColor: '#f59e0b',
    },
  ],

  awards: [
    {
      id: 'award-1',
      title: 'Best Mentor (For Training Interns)',
      company: 'Epam Systems',
      date: 'June 2024',
    },
    {
      id: 'award-2',
      title: 'Transcending Functional Boundaries Award',
      company: 'Epam Systems',
      date: 'Aug 2024',
    },
    {
      id: 'award-3',
      title: 'Transcending Functional Boundaries Award',
      company: 'Epam Systems',
      date: 'Dec 2023',
    },
    {
      id: 'award-4',
      title: 'Customer Focus Award',
      company: 'Epam Systems',
      date: 'Jan 2024',
    },
  ],

  education: {
    degree: 'Bachelor of Engineering, Computer Science',
    institution: 'RGPV University',
    location: 'Bhopal, MP',
    period: '2015 – 2019',
    gpa: '7.71 / 10',
  },

  projects: [
    {
      id: 'proj-1',
      title: 'Knowledge Bot — RAG AI Agent',
      description:
        'An internal RAG-based AI agent built with LangChain and OpenAI embeddings to intelligently query technical documentation, drastically improving developer onboarding and knowledge discovery at scale.',
      longDescription:
        'Designed to eliminate the pain of hunting through scattered documentation. Uses semantic chunking, OpenAI embeddings stored in pgvector, and a LangChain retrieval chain with a FastAPI backend. Deployed internally at Epam and actively used by engineering teams.',
      technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'pgvector', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/AbhishekKumarSingh07',
      stars: 0,
      forks: 0,
      featured: true,
      status: 'active',
      year: '2023',
    },
    {
      id: 'proj-2',
      title: 'Async FastAPI Service Modernisation',
      description:
        'Redesigned a critical legacy data service into a fully asynchronous FastAPI application with Pydantic v2 validation and async SQLAlchemy, achieving 40%+ reduction in API response times.',
      longDescription:
        'The legacy service was a synchronous Django view-based API that became a bottleneck under load. The new FastAPI rewrite uses async/await throughout, connection pooling, and background task offloading — making it significantly faster and more resilient.',
      technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'PostgreSQL', 'Docker', 'AWS'],
      githubUrl: 'https://github.com/AbhishekKumarSingh07',
      featured: true,
      status: 'active',
      year: '2022',
    },
    {
      id: 'proj-3',
      title: 'Global Financial Trading Platform Backend',
      description:
        'Django + Wagtail CMS backend powering a high-traffic global financial trading platform, with improved content workflows enabling non-technical teams to publish and update independently.',
      technologies: ['Python', 'Django', 'Wagtail CMS', 'PostgreSQL', 'Redis', 'AWS'],
      githubUrl: 'https://github.com/AbhishekKumarSingh07',
      featured: true,
      status: 'active',
      year: '2022',
    },
    {
      id: 'proj-4',
      title: 'LIBOR Transition Automation',
      description:
        'A suite of Bash and Python scripts developed for a major UK bank to automate the transition of financial accounts from LIBOR to alternative rates, ensuring regulatory compliance ahead of the deadline.',
      technologies: ['Python', 'Bash', 'SQL', 'PostgreSQL', 'MySQL'],
      githubUrl: 'https://github.com/AbhishekKumarSingh07',
      featured: false,
      status: 'archived',
      year: '2020',
    },
    {
      id: 'proj-5',
      title: 'Payment Card Testing Tool',
      description:
        'Contributed to a global payment card testing platform by implementing an upgraded encryption algorithm and extending test coverage for evolving payment compliance standards.',
      technologies: ['Python', 'C++', 'Encryption', 'Payment Standards'],
      githubUrl: 'https://github.com/AbhishekKumarSingh07',
      featured: false,
      status: 'archived',
      year: '2021',
    },
  ],
};
