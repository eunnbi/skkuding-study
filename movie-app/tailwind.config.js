/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "blueviolet",
          DEFAULT: "blueviolet",
          dark: "#D391FA",
        },
      },
    },
    screens: {
      sm: { max: "520px" },
    },
  },
  plugins: [],
};
