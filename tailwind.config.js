/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        rosa: "#fbaaff",
        azul: "#4d73db",
        verde: "#64fed7",
        cinza: "#212121",
      },
      fontFamily: {
        Righteous: ["Righteous"],
        Poppins: ["Poppins"],
        Roboto: ["Roboto"],
      },
      fontSize: {
        xl: "1.25rem",
        "9xl": "9rem",
      },
     
    },
  },
  plugins: [],
};
