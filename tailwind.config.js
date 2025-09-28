/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1C9876",
        secondary: "#F59E0B",
        darkColorMode: "#111827",
        backgroundColorOne: "rgba(73, 164, 248, 0.04)",
        backgroundColorTwo: "rgba(15, 209, 186, 0.04)",
        heading: "#000000",
        paragraph: "#595959",
        button: "#1C9876",
        buttonHover: "#22a580",
        footer_heading: "#171717",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        manrope: ["Manrope", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "16px",
        base: "24px",
        lg: "1.125rem",
        xl: "30px",
        "2xl": "45px",
        "3xl": "1.875rem",
        "7xl": "55px"
      },
      spacing: {
        80: "80px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
