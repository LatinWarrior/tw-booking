/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    safelist: [
        {
            pattern: /./,
        },
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
