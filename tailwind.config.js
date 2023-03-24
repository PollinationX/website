/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-pollinationx': '#222222',
        'grey-pollinationx': '#888888',
        'honey-pollinationx': '#FAB432',
      },
      fontFamily: {
        sans: ['var(--font-metropolis)']
      },
    },
  },
  plugins: [],
}