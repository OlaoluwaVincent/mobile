const { hairlineWidth } = require("nativewind/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: {
          text: "#0D3B66",
          background: "#E6F0FA",
          tint: "#1D4ED8",
          icon: "#2563EB",
          tabDefault: "#60A5FA",
          tabSelected: "#1D4ED8",
          primary: "#3B82F6",
          secondary: "#93C5FD",
          accent: "#0EA5E9",
          highlight: "#38BDF8",
        },
        green: {
          success: "#22C55E",
        },
        orange: {
          warning: "#F97316",
        },
        red: {
          error: "#EF4444",
        },
        darkblue: {
          text: "#DCEAFE",
          background: "#0A192F",
          tint: "#3B82F6",
          icon: "#60A5FA",
          tabDefault: "#1E40AF",
          tabSelected: "#3B82F6",
          primary: "#2563EB",
          secondary: "#1E3A8A",
          accent: "#0EA5E9",
          highlight: "#38BDF8",
        },
        darkgreen: {
          success: "#4ADE80",
        },
        darkorange: {
          warning: "#FB923C",
        },
        darkred: {
          error: "#F87171",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
      borderWidth: {
        hairline: hairlineWidth(),
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
  plugins: [require("tailwindcss-animate")],
};
