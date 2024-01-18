import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './animation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
      },
      fontFamily: {
        montreal: ["Montreal", "sans-serif"],
      },
    },
    screens: {
      sm: { max: "768px" },
      md: { min: "768px", max: "1024px" },
      lg: '1024px',
    },
  },
  plugins: [],
};
export default config;
