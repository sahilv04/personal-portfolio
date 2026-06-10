import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3EDE0",
          deep: "#EAE2CD",
          card: "#FBF7EC",
        },
        ink: {
          DEFAULT: "#211D14",
          soft: "#57503F",
          faint: "#8B8269",
        },
        vermilion: "#C8401F",
        cobalt: "#2D4FA1",
        teal: "#17695A",
        ochre: "#96660F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "spin-slow": "spin 16s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        offset: "5px 5px 0 0 #211D14",
        "offset-red": "5px 5px 0 0 #C8401F",
        "offset-sm": "3px 3px 0 0 #211D14",
      },
    },
  },
  plugins: [typography],
};

export default config;
