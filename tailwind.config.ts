import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./@/**/*.{ts,tsx}",
    // Map over the labels and add them to the safelist
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    fontSize: {
      xxs: ["0.7rem", "1rem"],
      xs: ["0.875rem", "1.5rem"],
      s: ["1rem", "1.25rem"],
      base: ["1.2rem", "1.625rem"],
      sm: ["1.125rem", "1.625rem"],
      md: ["1.5rem", "2.25rem"],
      lg: ["2.1rem", "1.375"],
      xl: ["2.25rem", "1.375"],
      "2xl": ["3rem", "1.375"],
      "3xl": ["5rem", "1.375"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(19 100% 55% / 1)",
        secondary: "hsl(45 3 23 / 1)",
        black: {
          DEFAULT: "#000",
          900: "#07111d",
        },
        grey: {
          900: "#E9E9E9",
          800: "#F0F0F0",
          700: "#F7F7F7",
          600: "#FAFAFA",
          500: "#9C9C9C",
          400: "#616161",
          300: "#333333",
          200: "#303030",
        },
        lightblue: "hsl(220.71deg 80.77% 79.61% / 70%)",
        bluebackground: "hsl(220.71deg 100% 50%)",
        "background-color": "hsl(53 50% 93% 1)",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-linear":
          "linear-gradient(360deg, rgb(255 78 0), rgb(255 133 79))",
        "gradient-linear-grey":
          "linear-gradient(to top, rgb(233 233 233 / 10%), rgb(233 233 233 /20%))",
        "gradient-linear-black":
          "linear-gradient(360deg, rgb(0 0 0), rgb(0 0 0 / 49%))",
        "gradient-linear-blue":
          "linear-gradient(209deg, rgb(220 227 242 / 70%) , rgb(255 255 255 / 100%))",
        "gradient-linear-light-blue":
          "linear-gradient(209deg, rgb(220 227 242 / 50%) , rgb(255 255 255 / 100%))",
        "gradient-linear-dark-blue":
          "linear-gradient(to top, rgb(0 82 255), rgb(107 151 245))",
      },
      boxShadow: {
        "1xl": "0 2px 4px 2px rgba(0, 0, 0, 0.2)",
      },
      boxShadowButton: {
        "box-shadow":
          "rgba(74, 146, 255, 0.72) 0px 0.602187px 3.01094px -1.25px inset, rgba(74, 146, 255, 0.635) 0px 2.28853px 11.4427px -2.5px inset, rgba(74, 146, 255, 0.25) 0px 10px 50px -3.75px inset, rgba(0, 0, 0, 0.184) 0px 0.796192px 0.796192px -0.9375px, rgba(0, 0, 0, 0.173) 0px 2.41451px 2.41451px -1.875px, rgba(0, 0, 0, 0.15) 0px 6.38265px 6.38265px -2.8125px, rgba(0, 0, 0, 0.063) 0px 20px 20px -3.75px, rgba(255, 231, 222, 0.25) 0px -6px 8px 0px inset",
      },
      backgroundImageRadial: {
        background:
          "radial-gradient(64.4 % 50 % at 50.6 % 56.2 %, rgba(255, 255, 255, 0) 0 %, rgb(255, 255, 255) 100 %)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
