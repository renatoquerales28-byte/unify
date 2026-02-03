/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['"Funnel Display"', 'sans-serif'],
            mono: ['"Funnel Display"', 'monospace'], // Force it even for mono if user wants ONE font, or keep a basic mono. Let's force sans for main.
        },
        extend: {},
    },
    plugins: [],
}
