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
        dexBlue: "#007AFF"
dexBlueLight: "#D4EDFF"
dexGreen: "#34C759"
dexGreenLight: "#E5F7E7"
dexPink: "#FF2D55"
dexPinkLight: "#FFEFF2"
      },
    },
  },
  plugins: [],
};
export default config;
