/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // for CRA
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // ⬅️ Add plugin
  ],
};
