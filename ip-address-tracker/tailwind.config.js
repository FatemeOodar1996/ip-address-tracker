/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rubik: "Rubik",
            },
            colors: {
                veryDarkGray: " hsl(0, 0%, 17%)",
                darkGray: "hsl(0, 0%, 59%)",
            },
            backgroundImage: {
                pattern: "url('../public/images/pattern-bg.png')",
            },
        },
    },
    plugins: [],
};
