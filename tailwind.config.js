/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0A4D68',
                    50: '#E6F3F7',
                    100: '#CCE7EF',
                    200: '#99CFE0',
                    300: '#66B7D0',
                    400: '#339FC1',
                    500: '#0A4D68',
                    600: '#084154',
                    700: '#063140',
                    800: '#04202C',
                    900: '#021118',
                },
                secondary: {
                    DEFAULT: '#052F42',
                    50: '#E8EEF1',
                    100: '#D1DDE3',
                    200: '#A3BBC7',
                    300: '#7599AB',
                    400: '#47778F',
                    500: '#052F42',
                    600: '#042635',
                    700: '#031D28',
                    800: '#02131B',
                    900: '#010A0E',
                },
                accent: {
                    DEFAULT: '#FF6B35',
                    50: '#FFF0EB',
                    100: '#FFE1D6',
                    200: '#FFC3AD',
                    300: '#FFA584',
                    400: '#FF875B',
                    500: '#FF6B35',
                    600: '#E55A28',
                    700: '#CC4A1C',
                    800: '#B3390F',
                    900: '#992903',
                },
                surface: '#F8FAFC',
                text: {
                    primary: '#1E293B',
                    secondary: '#64748B',
                },
            },
            fontFamily: {
                heading: ['Plus Jakarta Sans', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
};

