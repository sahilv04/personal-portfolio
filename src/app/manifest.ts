import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sahil Verma Portfolio',
    short_name: 'Sahil Portfolio',
    description: 'Technical Lead and Full Stack Developer portfolio website.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060a13',
    theme_color: '#060a13',
    icons: [],
  };
}
