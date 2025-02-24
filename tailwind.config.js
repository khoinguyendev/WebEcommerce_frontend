/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eb3e32",
        tabs: "#ed4e2e",
        gray1: "#323c42",
        gray2: "#9e9e9e",

      }
    },
  },
  plugins: [],
}

