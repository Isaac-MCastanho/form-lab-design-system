/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",

      black: "#000",
      white: "#FFF",

      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7c7c8a",
        100: "#e1e1e6",
        200: "#c4c4cc",
      },

      cyan: {
        500: "#81d8f7",
        300: "#9be1fb",
      },
    },
    extend: {
      fontFamily: { sans: "Inter, sans-serif" },
    },
  },
  plugins: [],
};
