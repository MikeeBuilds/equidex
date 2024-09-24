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
        dexSky: "#007AFF"
dexSkyLight: "#D4EDFF"
dexPurple: "#5856D6"
dexPurpleLight: "#E5E5EA"
dexYellow: "#FFCC00"
dexYellowLight: "#FFFAEF"
      }
    },
  },
  plugins: [],
};
export default config;
