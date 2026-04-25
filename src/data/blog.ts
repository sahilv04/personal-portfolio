export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  headings: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-i-build-scalable-react-applications',
    title: 'How I Build Scalable React Applications',
    excerpt:
      'A practical breakdown of architecture, component design, state strategy, and code quality practices for enterprise React systems.',
    publishedAt: '2026-04-24',
    readingTime: '7 min read',
    headings: ['Architecture First', 'Designing for Team Scale', 'Operational Readiness'],
    content: [
      'Scalable React delivery starts with architecture decisions before UI details. I usually begin by defining domain boundaries, routing boundaries, and predictable state ownership so teams can add features without regressions.',
      'For enterprise applications, I combine TypeScript with consistent component contracts and clear folder boundaries. Redux is used where cross-app state and debugging matter; local state remains local to keep complexity contained.',
      'Code reviews are part of scalability. They keep style and logic consistent, reduce single-point knowledge, and improve onboarding speed for new engineers.',
      'Production readiness means monitoring, release discipline, and collaboration with backend and cloud teams. Scalable React is not only about rendering performance; it is about predictable delivery over time.',
    ],
  },
  {
    slug: 'frontend-leadership-lessons-from-enterprise-projects',
    title: 'Frontend Leadership Lessons from Enterprise Projects',
    excerpt:
      'Lessons learned while leading frontend and full-stack delivery teams across enterprise programs with Scrum workflows.',
    publishedAt: '2026-04-24',
    readingTime: '6 min read',
    headings: ['Leadership as Enablement', 'Quality as a Team Habit', 'Scrum and Delivery Rhythm'],
    content: [
      'Frontend leadership in enterprise settings is less about individual heroics and more about enabling team outcomes. I focus on making scope, quality expectations, and technical constraints visible to everyone.',
      'A strong review culture improves architecture and consistency. It also creates a shared baseline for performance, accessibility, and maintainability across engineers with different experience levels.',
      'Scrum ceremonies become effective when grounded in engineering reality. Estimation improves when teams discuss risk, dependencies, and technical debt early.',
      'Leadership also includes recruitment and mentoring. Hiring engineers who can reason about systems, not only features, helps organizations maintain delivery speed as complexity grows.',
    ],
  },
  {
    slug: 'building-cloud-ready-full-stack-applications-with-react-and-nodejs',
    title: 'Building Cloud-Ready Full Stack Applications with React and Node.js',
    excerpt:
      'How I approach cloud-capable web systems using React frontends, Node.js/Express backends, and practical deployment workflows.',
    publishedAt: '2026-04-24',
    readingTime: '8 min read',
    headings: ['Designing the End-to-End Flow', 'Cloud Deployment Patterns', 'Maintaining Reliability'],
    content: [
      'Cloud-ready systems begin with clean contracts between frontend and backend layers. In React and Node.js projects, I prioritize clear API shapes and validation so integrations stay reliable.',
      'On AWS and GCP, I have worked with VM-hosted deployments, database integrations, and service workflows that move data between systems. Infrastructure choices are guided by reliability and team operational maturity.',
      'Express backends remain maintainable when routing, domain logic, and persistence concerns are separated. This keeps iteration speed high as product scope increases.',
      'Reliable delivery requires release checklists, rollback plans, and observability. Cloud readiness is ultimately about sustainable operations, not just deployment scripts.',
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
