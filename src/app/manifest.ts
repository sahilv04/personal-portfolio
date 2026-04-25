import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sahil Verma Portfolio',
    short_name: 'Sahil Portfolio',
    description: 'Technical Lead, Full Stack Developer, Cloud & Frontend Specialist',
    start_url: '/',
    display: 'standalone',
    background_color: '#05070f',
    theme_color: '#0f172a',
    icons: []
  };
}
