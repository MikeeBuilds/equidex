import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dexSky: "#C3EBFA",
        dexSkyLight: "#EDF9FD",
        dexPurple: "CFCEFF",
        dexPurpleLight: "#F1F0FF",
        dexYellow: "#FAE27C",
        dexYellowLight: "#FFF8E1",
        dexOrange: "#FFC87C",
        dexOrangeLight: "#FFE9C8",
        dexRed: "#FF7C7C",
        dexRedLight: "#FFE8E8",
        dexGreen: "#7CFA8F",
        dexGreenLight: "#E8FFE8",
        
      }
    },
  },
  plugins: [],
};
export default config;
