export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-i-build-scalable-react-applications',
    title: 'How I Build Scalable React Applications',
    excerpt:
      'A practical blueprint for planning, structuring, and delivering React applications that stay maintainable at enterprise scale.',
    publishedAt: '2026-04-10',
    readingTime: '7 min read',
    tags: ['React', 'TypeScript', 'Redux', 'Architecture'],
    content: [
      'Scalable React applications start with boundaries. I split features by business domain and keep each module responsible for its own UI, state logic, and tests. This avoids deeply coupled component trees and helps teams move faster.',
      'TypeScript is a non-negotiable baseline for me. Shared interfaces and typed API contracts reduce regressions and make code reviews clearer. In enterprise projects, this consistency helps multiple engineers ship changes with confidence.',
      'For state management, I use Redux where workflows are complex and involve cross-feature coordination. I keep local UI state close to components and reserve global state for data that truly needs to be shared.',
      'I pair technical patterns with delivery discipline: code reviews, sprint planning, and measurable Definition of Done criteria. The combination of architecture and process is what makes React systems sustainable over time.'
    ]
  },
  {
    slug: 'frontend-leadership-lessons-from-enterprise-projects',
    title: 'Frontend Leadership Lessons from Enterprise Projects',
    excerpt:
      'What I learned while leading frontend and full-stack teams across long-running enterprise initiatives.',
    publishedAt: '2026-04-15',
    readingTime: '6 min read',
    tags: ['Leadership', 'Code Reviews', 'Scrum', 'Frontend'],
    content: [
      'Leadership in frontend engineering is about decision quality and team clarity. I focus on defining coding standards early so pull requests stay predictable and maintainable.',
      'Code reviews are one of the strongest quality levers. My reviews emphasize architecture, user impact, and long-term maintainability—not just syntax-level comments. This raises quality without slowing delivery.',
      'In scrum environments, I align technical work with business priorities by breaking stories into vertical slices. That enables earlier feedback and reduces rework in late sprint stages.',
      'Hiring and mentorship are part of delivery. Conducting interviews and guiding engineers through complex tasks helps teams scale without losing engineering standards.'
    ]
  },
  {
    slug: 'building-cloud-ready-full-stack-applications-with-react-and-nodejs',
    title: 'Building Cloud-Ready Full Stack Applications with React and Node.js',
    excerpt:
      'How I approach full-stack product delivery with resilient frontend architecture, reliable Node.js services, and practical cloud deployment patterns.',
    publishedAt: '2026-04-20',
    readingTime: '8 min read',
    tags: ['Node.js', 'Express', 'AWS', 'GCP', 'Full Stack'],
    content: [
      'Cloud-ready full-stack systems need clear service boundaries. I design Node.js and Express APIs around business capabilities, then connect React clients through typed contracts and validation layers.',
      'Deployment strategy matters as much as code. Across AWS and GCP, I have worked with virtual machine-based hosting, database integrations, and operational checks that keep enterprise systems stable.',
      'I prioritize observability and repeatability: environment-specific configs, release checklists, and rollback-ready deployments. This lowers risk when shipping frequently.',
      'The goal is not simply to launch features, but to build systems that teams can evolve. Clean architecture, review culture, and cloud-aware planning make that possible.'
    ]
  }
];
