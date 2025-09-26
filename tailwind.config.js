/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1C9876",
        secondary: "#F59E0B",
        backgroundColorOne: "#E6EEEC",
        backgroundColorTwo: "#FFFFFF00",
        heading: "#000000",
        button: "#1C9876",
        buttonHover: "#22a580",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "16px",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
