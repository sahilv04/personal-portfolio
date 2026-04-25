export const siteConfig = {
  name: 'Sahil Verma Portfolio',
  brand: '< SAHIL />',
  title: 'Sahil Verma — Technical Lead and Full Stack Developer',
  description:
    'Sahil Verma is a Technical Lead, Full Stack Developer, and cloud-capable engineer specializing in React, TypeScript, Node.js, Express, AWS, and GCP for enterprise applications.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  email: 'email@example.com',
  github: 'https://github.com/your-handle',
  linkedin: 'https://linkedin.com/in/your-handle',
  resumeUrl: 'https://example.com/resume.pdf',
  externalBlogUrl: 'https://example.com/blog',
  keywords: [
    'Sahil Verma',
    'Technical Lead',
    'Full Stack Developer',
    'React specialist',
    'TypeScript',
    'Node.js',
    'Express',
    'AWS',
    'GCP',
    'cloud deployments',
    'enterprise applications'
  ]
} as const;
