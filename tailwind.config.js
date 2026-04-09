import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "serif"],
        display: ["Instrument Serif", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        grotesk: ["Anton", "sans-serif"],
        condiment: ["Condiment", "cursive"],
        yellowtail: ["Yellowtail", "cursive"],
        orbitron: ["Orbitron", "ui-sans-serif", "system-ui", "sans-serif"],
        "space-grotesk": [
          "Space Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        jetbrains: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        space: "#010828",
        cream: "#EFF4FF",
        neon: "#6FFF00",
        folio: {
          bg: "hsl(var(--folio-bg) / <alpha-value>)",
          surface: "hsl(var(--folio-surface) / <alpha-value>)",
          text: "hsl(var(--folio-text) / <alpha-value>)",
          muted: "hsl(var(--folio-muted) / <alpha-value>)",
          line: "hsl(var(--folio-line) / <alpha-value>)",
          accent: "hsl(var(--folio-accent) / <alpha-value>)",
        },
      },
      maxWidth: {
        page: "1831px",
      },
      keyframes: {
        "scroll-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        "role-fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "scroll-down": "scroll-down 1.5s ease-in-out infinite",
        "role-fade-in": "role-fade-in 0.4s ease-out forwards",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
