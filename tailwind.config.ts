import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                satoshi: ["var(--font-satoshi)"],
                integral: ["var(--font-integral)"],
            },
            screens: {
                'xs': '390px', // Custom breakpoint for 390px
            },
            padding:{
                "customPaddingX": "16px"
            }
        },
    },
    plugins: [],
} satisfies Config;
