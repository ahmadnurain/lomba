/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/asset/logo.png')",
      },
      colors: {
        redkfc: "#F32E26",
      },
      animation: {
        "spin-slow": "spin 100s linear infinite",
      },
      borderWidth: {
        dotborder: "25px",
      },
    },
  },
  plugins: [],
};
