/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00A3FF',
        'secondary': '#00A3FF',
        // 'secondary': '#00C2FF',
        'bgprimary': '#E2F6FF',
        'brightRed': 'hsl(12, 88%, 59%)',
        'brightRedLight': 'hsl(12, 88%, 69%)',
        'brightRedSupLight': 'hsl(12, 88%, 95%)',
        'darkBlue': 'hsl(228, 39%, 23%)',
        'darkGrayishBlue': 'hsl(227, 12%, 61%)',
        'veryDarkBlue': 'hsl(233, 12%, 13%)',
        'veryPaleRed': 'hsl(13, 100%, 96%)',
        'veryLightGray': 'hsl(0, 0%, 98%)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '20': 'repeat(20, minmax(0, 3fr))',
      }
    },
  },
  plugins: [],
}
