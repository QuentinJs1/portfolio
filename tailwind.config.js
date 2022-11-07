/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#4945FF'
        },
        grey: {
          100: 'hsl(241, 2%, 36%)',
          200: 'hsl(241, 2%, 52%)',
          300: 'hsl(241, 2%, 31%)',
        }
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      height: {
        '58': '14.5rem',
      },
    },
  },
  
  plugins: [],
}