import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/app/**/*.{ts,tsx}', './src/app/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        bubblePink: 'var(--bubble-pink)',
        bubbleYellow: 'var(--bubble-yellow)',
        bubbleBlue: 'var(--bubble-blue)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
        ui: 'var(--font-ui)',
      },
    },
  },
  plugins: [],
};

export default config;
