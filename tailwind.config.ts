import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        milk: "#FFFFFF",
        cream: "#F6E7D8",
        ink: "#080808",
        white2: "#FFFFFF",
        blush: "#F8C8C8",
        "blush-soft": "#FCE8EA",
        "blush-haze": "#FFF6F7",
        red: "#FF1F0F",
        beige: "#F4E7D3",

        // Legacy token names are remapped to the new boutique palette.
        pink: "#F8C8C8",
        "pink-deep": "#FF1F0F",
        "pink-soft": "#FCE8EA",
        "pink-haze": "#FFF6F7",
        dusk: "#F8C8C8",
        "dusk-deep": "#FF1F0F",
        apricot: "#F4E7D3",
        "apricot-soft": "#F6E7D8",
        haze: "#FFF6F7",
        moss: "#F6E7D8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        monster: ["var(--font-fraunces)", "Georgia", "serif"],
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
