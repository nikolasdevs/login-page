/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { body: "Josefin Sans" },
      animation: {
        sideways: "sideways 3s linear infinite",
      },
      keyframes: {
        sideways: {
          "0%, 100%": { left: "0", top: "0" },
          "50%": { left: "100px", top: "0" },
        },
      },
      animation: {
        sideways: "sideways 1s linear infinite",
      },
    },
    plugins: [],
  },
};
