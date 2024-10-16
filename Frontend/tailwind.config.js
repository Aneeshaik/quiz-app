/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html"
  ],
  theme: {
    extend: {
      scale: {
        '101': '1.01',
        '102': '1.02'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}