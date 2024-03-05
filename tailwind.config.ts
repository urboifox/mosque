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
        primary: "#DB9E30",
        secondary: "#ce9124",
        hover: "#f0b65f",
        foreground: "#000000",
        light: {
          100: "#f6f6f6",
          200: "#E8E8E8",
        },
        background: "#ffffff",
        dimmed: "#625F71",
        gray: "#656565",
        // nature: {
        //   100: "#050B19",
        //   200: "#13182B",
        //   300: "#262F44",
        //   400: "#3B4459",
        //   500: "#58647C",
        //   600: "#8D98AF",
        //   700: "#C6D0E0",
        //   800: "#E0E6EE",
        //   900: "#EEF4FA",
        //   110: "#F6F8FC",
        // },
        // green: {
        //   100: "#67EEAD",
        //   200: "#3BEB96",
        //   300: "#1AB66B",
        // },
        // red: {
        //   100: "#F98A8A",
        //   200: "#EB4D4D",
        //   300: "#B72B2B",
        // },
        // blue: {
        //   100: "#83BDF2",
        //   200: "#4A9CE9",
        //   300: "#1578D4",
        //   400: "#0A4D8A",
        //   500: "#022D54",
        //   600: "#13182B",
        // },
        // orange: {
        //   100: "#F09E62",
        //   200: "#FF8A35",
        //   300: "#D1691E",
        // },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
