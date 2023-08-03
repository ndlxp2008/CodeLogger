/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    './src/**/*.{vue,scss,css,tsx,ts,js,jsx}',
    './components/**/*.{vue,scss,css,tsx,ts}',
    './layouts/**/*.{vue,scss,css,tsx,ts}',
    './style/**/*.{scss,css}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

