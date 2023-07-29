/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                mainBgColor: "#FAF9F8",
                navColor: "rgb(37,100,207)",
            },
        },
    },
    plugins: [],
};
