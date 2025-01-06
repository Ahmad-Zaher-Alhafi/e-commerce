import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
        xs: "390px", // Custom breakpoint for 390px
      },
    },
  },
  plugins: [
    function (pluginAPI: PluginAPI) {
      const { addUtilities } = pluginAPI;

      addUtilities({
        ".hide-scrollbar": {
          "scrollbar-width": "none",
        },

        ".show-scrollbar": {
          "scrollbar-width": "auto",
        },
        ".custom-divider": {
          backgroundColor: "black",
          height: "2px",
          opacity: "0.1",
        },
      });
    },
  ],
} satisfies Config;
