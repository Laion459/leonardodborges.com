import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        accent: "#00FFFF"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-inter)"]
      },
      spacing: {
        screenw: "100vw",
        screenh: "100vh"
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.19, 1, 0.22, 1)"
      }
    }
  },
  plugins: []
};

export default config;

