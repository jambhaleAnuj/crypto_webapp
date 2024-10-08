/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },
  },
  plugins: [],
};
