import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f5ee",
          100: "#e4ead9",
          200: "#c9d4b3",
          300: "#adbf8c",
          400: "#92a966",
          500: "#779344",
          600: "#5f7535",
          700: "#475626",
          800: "#2f3817",
          900: "#181c0b"
        },
        bark: {
          DEFAULT: "#4b3a2a"
        },
        cream: {
          DEFAULT: "#f4ede1"
        },
        accent: {
          DEFAULT: "#ff7a00"
        }
      },
      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        sans: ["'Work Sans'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        nav: "0 10px 30px rgba(0,0,0,0.08)",
        card: "0 12px 40px rgba(75,58,42,0.15)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};

export default config;
