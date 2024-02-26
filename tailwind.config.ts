import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Arimo', 'sans-serif'],
      serif: ['Arimo', 'serif'],
    },
    plugins: [],
    extend: {
      fontSize: {
        subtitle: '42px',
      },
      fontWeight: {
        subtitle: '700',
      },
    },
  },
  plugins: [],
};
export default config;
