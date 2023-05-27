/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                'almost-white': 'hsl(0, 0%, 98%)',
                'medium-gray': 'hsl(0, 0%, 41%)',
                'almost-black': 'hsl(0, 0%, 8%)'
            },
            fontSize: {
                custom1: '1.125rem'
            }
        },
    },
    plugins: [],
}

