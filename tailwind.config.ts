import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#213F7D",
        primary: "#39CDCC",
        accent: "#545F7D",
      },
      fontFamily: {
        primary: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        spread:
          "0 4px 100px rgba(145, 143, 143, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
