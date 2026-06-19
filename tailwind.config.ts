import type { Config } from "tailwindcss";

/* ============================================================
   HOTSHOT INSURANCE — "Open Highway" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to highway/steel blue (primary) / slate
   graphite blue-grey (secondary) / caution amber (accent).
   clay = steel blue · sage = slate graphite · gold = caution amber
   cream = light paper · sand = soft slate
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F8FC",
        sand: "#E8EEF5",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1E4D8C",
          dark: "#143864",
          light: "#3F73B4",
          50: "#EAF1F9",
          100: "#CBDDEC",
          200: "#94B6D6",
          300: "#5C90BF",
          400: "#3F73B4",
          500: "#1E4D8C",
          600: "#143864",
          700: "#0E2A4B",
          800: "#0A1E37",
          900: "#071527",
        },
        sage: {
          DEFAULT: "#475569",
          dark: "#334155",
          light: "#64748B",
          50: "#F1F5F9",
          100: "#E2E8F0",
          200: "#CBD5E1",
          300: "#94A3B8",
          400: "#64748B",
          500: "#475569",
          600: "#334155",
          700: "#1E293B",
        },
        gold: {
          DEFAULT: "#F59E0B",
          dark: "#C2740A",
          light: "#FBBF24",
          50: "#FEF6E7",
          100: "#FDE9B8",
          200: "#FBD274",
          300: "#FABD3C",
          400: "#F59E0B",
          500: "#C2740A",
          600: "#9A5B08",
        },
        espresso: "#0F1B2D",
        cocoa: "#3B4858",
        mocha: "#64748B",
        adobe: "#D9E2EC",
        adobeDark: "#BFCBD9",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F5F8FC 0%, #EAF1F9 40%, #E8EEF5 70%, #F5F8FC 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(62,115,180,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(71,85,105,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1E4D8C 0%, #3F73B4 100%)",
        "sage-gradient": "linear-gradient(135deg, #475569 0%, #64748B 100%)",
        "gold-gradient": "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(20, 56, 100, 0.22), 0 4px 12px -6px rgba(15, 27, 45, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(20, 56, 100, 0.28), 0 10px 30px -10px rgba(15, 27, 45, 0.10)",
        card: "0 2px 8px -2px rgba(15, 27, 45, 0.06), 0 1px 3px -1px rgba(15, 27, 45, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(20, 56, 100, 0.24), 0 8px 20px -8px rgba(15, 27, 45, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(20, 56, 100, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
