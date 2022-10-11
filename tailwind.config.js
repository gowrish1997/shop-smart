/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': 'hsla(136,40%,57%,calc(100 -20%))',
      },
    },
  },
  plugins: [],
}
