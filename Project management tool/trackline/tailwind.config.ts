import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#09110c',
        'background': '#fbfefc',
        'primary': '#2fd062',
        'secondary': '#8beaa9',
        'accent': '#55f7e4',
       },
       
    },
  },
  plugins: [],
} satisfies Config;
