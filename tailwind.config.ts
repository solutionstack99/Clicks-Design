import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
    fontSize: {
      xs: ["0.875rem", "1.5rem"],
      base: ["1.2rem", "1.625rem"],
      sm: ["1.125rem", "1.625rem"],
      lg: ["1.25rem", "2.25rem"],
      md: ["1.5rem", "2.25rem"],
      xl: ["2.25rem", "2.75rem"],
      "2xl": ["3rem", "3rem"],
      "3xl": ["5rem", "2.75rem"],
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
        grey: {
          900: "#E9E9E9",
          800: "#F0F0F0",
          700: "#F7F7F7",
          600: "#FAFAFA",
          500: "#9C9C9C",
        },
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
          "linear-gradient(360deg,  rgb(255 78 0), rgb(255 133 79))",
      },
      boxShadow: {
        "1xl": "0 2px 4px 2px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
