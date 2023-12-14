/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            // fontFamily: {
            //     markpro: ["Mark Pro"],
            //     dinw05: ["DINNextLTW05"],
            //     dinw05Bold: ["DINNextLTW05Bold"],
            //     tungstenBold: ["Tungsten-Bold"],
            //     dinw1g: ["DIN Next W1G"],
            //     ffmark: ["MarkSCOffcW05"],
            //     jetBrains: ["JetBrains"],
            // },
            transitionTimingFunction: {
                customTransition: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            },
            colors: {
                primary: "#ffffff",
                secondary: "#000000",
                tertiary: "#4801ff",
                "black-100": "#0000001a",
                "black-200": "#333333",
                "white-100": "#f2f2f2",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
};
