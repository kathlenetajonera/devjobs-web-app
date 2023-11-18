/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                body: '#6e8098',
                black: '#19202d',
                violet: '#5964e0',
                gray: '#e8e8ea',
                'light-gray': '#f5f6f8',
                'dark-gray': '#c1c0c4'
            },
            backgroundImage: {
                header: "url( '/src/assets/patterns/bg-pattern-header-desktop.svg')"
            },
            gridTemplateColumns: {
                cards: 'repeat(auto-fit, minmax(300px, 1fr))'
            }
        }
    },
    plugins: []
};
