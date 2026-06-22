import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft editorial dreamscape palette
        milk: "#F6F1E7", // warm cream paper
        cream: "#FBF8F1",
        ink: "#23202B", // soft near-black
        dusk: "#9AA6D6", // periwinkle dusk
        "dusk-deep": "#6E78B8",
        apricot: "#F3B48A", // warm apricot
        "apricot-soft": "#F7CBAE",
        haze: "#E7DFEF", // lilac haze
        moss: "#A8B89B", // muted sage (future flower/animal dreams)
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
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
