/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "darkGray1": "#6b6a6a",
      },
      backgroundColor: {
        gray1: "#e9eaeb",
        gray2: "#878888",
      },
      borderColor: {
        darkBlue1: "#2b74ba",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        center: true,
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: ["winter"] },
};
