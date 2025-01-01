import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    daisyui: {
        themes: [
            {
                dark: {
                    primary: "#009dff",

                    secondary: "#0064b9",

                    accent: "#00d683",

                    neutral: "#373A40",

                    "base-100": "#1A1A1a",

                    info: "#00b1ff",

                    success: "#00ab71",

                    warning: "#df8800",

                    error: "#d90000",
                },
            },
            {
                light: {
                    primary: "#009dff",

                    secondary: "#0064b9",

                    accent: "#00d683",

                    neutral: "#332c2c",

                    "base-100": "#1A1A1D",

                    info: "#00b1ff",

                    success: "#00ab71",

                    warning: "#df8800",

                    error: "#d90000",
                },
            },
        ],
    },

    plugins: [require("daisyui")],
};
