/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      dark: "14px 5px 70px 6px rgba(0,0,0,0.1)"
    },
    fontFamily: {
      Itim: ["Itim", "cursive"]
    },
    colors: {
      ...colors,
      "dark-green": "#25A79D"
    },
    extend: {
      width: {
        "3/6": "50%"
      },
      borderRadius: {
        50: "50%"
      },
      height: {
        "80vh": "80vh",
        "10vh": "10vh"
      }
    }
  },
  plugins: []
};