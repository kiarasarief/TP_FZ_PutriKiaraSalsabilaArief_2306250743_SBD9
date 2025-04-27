/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pastel-blue": "#A6C7E8",
        "light-pastel-blue": "#C7DDFF",
        "dark-pastel-blue": "#7CA5D9",
        cream: "#FFF8E7",
        "light-cream": "#FFFDF8",
        accent: "#F5B7B1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
