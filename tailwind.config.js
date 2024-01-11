/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-blue": "#020f22",
        "input-blue": "#121e30d0",
        "text-teal": "#008080",
        "custom-green": "#11CD6D",
        "custom-blue": "#00dce1",
      },
      boxShadow: {
        "div-shadow": "0px 10px 25px #00dce1;",
        "div-shadow-2": "0px 10px 25px #11CD6D;",
      },
    },
  },
  plugins: [],
};
