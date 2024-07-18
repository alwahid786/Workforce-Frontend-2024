/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(12, 103, 188, 1)",
        secondary: "rgba(231, 93, 80, 1)",
      },
      boxShadow: {
        'form-shadow': '0px 4px 94px 0px rgba(0, 0, 0, 0.19)',
        'card-shadow': '0px 12px 23px 0px rgba(62, 73, 84, 0.04)'
      },
    },
  },
  plugins: [],
};
