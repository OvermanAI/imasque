import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black + Pink + White — simplified brand palette.
        // Legacy token names are kept and remapped to pink shades so the
        // whole site recolours from one place.
        milk: "#FFFFFF", // page background — white
        cream: "#FFF6F7", // softest pink-white for cards / inputs
        ink: "#080808", // black
        white2: "#FFFFFF",

        // pink scale (from the logo)
        pink: "#F8C8C8", // primary light rose (logo wordmark)
        "pink-deep": "#E07A84", // deeper coral for text accents / hover
        "pink-soft": "#FBDCDE", // light pink tint
        "pink-haze": "#FCEAEB", // near-white pink wash

        // remapped legacy names → pink
        dusk: "#F4A9B0",
        "dusk-deep": "#E07A84",
        apricot: "#F8C8C8",
        "apricot-soft": "#FBDCDE",
        haze: "#FCEAEB",
        moss: "#F4A9B0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        monster: ["var(--font-anton)", "Impact", "ui-sans-serif", "sans-serif"],
        couture: ["var(--font-bodoni)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
        cjk: ["var(--font-noto-tc)", "ui-sans-serif", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.02em",
        wider2: "0.18em",
        widest2: "0.34em",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurin: {
          "0%": { opacity: "0", filter: "blur(14px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -3%) scale(1.06)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        rise: "rise 0.9s cubic-bezier(0.16,1,0.3,1) both",
        blurin: "blurin 1.2s cubic-bezier(0.16,1,0.3,1) both",
        drift: "drift 18s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
