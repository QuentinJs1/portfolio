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
                dark: '#02021E',
                purple: '#3719CA',
                gray: '#474755',
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
            },
            height: {
                px: '0.5px'
            },
            width: {
                px: '0.25px'
            },
        },
        fontFamily: {
            sans: ["Poppins"]
        }
    },
    plugins: [],
}