const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {},
        container: {
            center: true,
        },
        colors: {
            background: '#fbfcfe',
            primary: {
                DEFAULT: '#D07600',
                50: '#DCE4F3',
                100: '#C5D3EC',
                200: '#97B0DC',
                300: '#698DCD',
                400: '#3E6BBB',
                500: '#2F518D',
                600: '#29467A',
                700: '#223B67',
                800: '#1C3054',
                900: '#162541'
            },
            secondary: {
                DEFAULT: '#2E2E2E',
                50: '#f5f5f5', 
                100: '#eaeaea', 
                200: '#cbcbcb', 
                300: '#ababab', 
                400: '#6d6d6d', 
                500: '#2E2E2E', 
                600: '#292929', 
                700: '#232323', 
                800: '#1c1c1c', 
                900: '#171717'
            },
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            red: colors.red,
            green: colors.green,
            gray: colors.gray,
            neutral: colors.neutral
        },
        fontFamily: {
            serif: ['RotisSemiSerif', 'serif'],
        }
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ]
}
