/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '767px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' }
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            fontFamily: {
                sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                body: '#6e8098',
                black: '#19202d',
                violet: '#5964e0',
                'light-violet': '#eeeffc',
                gray: '#e8e8ea',
                'light-gray': '#f5f6f8',
                'dark-gray': '#c1c0c4',
                overlay: 'rgba(0,0,0,0.5)'
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
