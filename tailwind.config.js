/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "warm-cream": "#FDF8F3",
        "soft-beige": "#E8DED2",
        "deep-brown": "#5C4033",
        sepia: "#704214",
        umber: "#654321",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
