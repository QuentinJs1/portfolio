/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#8934FF',
        deeppurple: '#1D1B84',
        darkblue: '#344C80',
        darkpurple: '#1A154E',
      },
      boxShadow: {
        sm: '0px 4px 24px 0 rgba(149, 157, 165, 0.2)',
      },
      rotate: {
          '135': '135deg',
          '160': '160deg',
      },
      borderWidth: {
          DEFAULT: '1.5px',
      },
      fontSize: {
          'xxs': '.4rem',
      },
      scale: {
          '102': '1.02',
      },
      spacing: {
          xl: '26rem',
          xxl: '34rem',
      }
    },
    fontFamily: {
      sans: ["Poppins"]
    }
  },
  plugins: [],
}
