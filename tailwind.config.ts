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
        montrealThin: ["MontrealThin", "sans-serif"],
      },
    },
    screens: {
      xs: '479px',
      ss: '619px',
      sm: '767px',
      md: '1059px',
      lg: '1199px',
      xl: '1699px',
    },
  },
  plugins: [],
};
export default config;
