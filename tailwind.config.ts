import type { Config } from 'tailwindcss';

// Tailwind queda disponible para utilidades puntuales.
// El sistema de diseño principal vive en app/globals.css (design tokens).
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
