import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    plugins: [],
  },
  plugins: [],
};
export default config;
