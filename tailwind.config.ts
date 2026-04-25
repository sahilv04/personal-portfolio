import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060a13',
        panel: '#111827',
        accent: '#22d3ee',
        violet: '#8b5cf6',
        magenta: '#ec4899',
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
