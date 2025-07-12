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
        primary: "#3B82F6",
        secondary: "#93C5FD",
        darkprimary: "#2563EB", // optional for dark mode
        darksecondary: "#1E3A8A",
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
