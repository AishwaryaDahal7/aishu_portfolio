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
        background: {
          primary: "#020617",
          secondary: "#030712",
          tertiary: "#050816",
        },
        gold: {
          primary: "#FACC15",
          warm: "#F59E0B",
          pale: "#FDE68A",
          deep: "#D97706",
        },
        slate: {
          soft: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "mist-drift": "mistDrift 8s ease-in-out infinite alternate",
        "golden-pulse": "goldenPulse 4s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        mistDrift: {
          "0%": { transform: "translateX(-5%) scaleX(1.05)", opacity: "0.6" },
          "100%": { transform: "translateX(5%) scaleX(0.95)", opacity: "0.9" },
        },
        goldenPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scaleY(1)" },
          "50%": { opacity: "0.7", transform: "scaleY(1.08)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FACC15 0%, #F59E0B 50%, #D97706 100%)",
        "hero-overlay":
          "linear-gradient(to top, #020617 0%, rgba(2,6,23,0.7) 40%, rgba(2,6,23,0.3) 70%, rgba(2,6,23,0.5) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
