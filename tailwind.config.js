/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "780px",
      lg: "1024px",
      blgxl: "1224px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightGreen: "#ffaa00",
        lightGreenTransparent: "#9ee870c7",
        darkGreen: "#163300",
        darkGreenTransparent: "#163300c3",
        primaryText: "#000",
        whiteText: "#ffffff",
        secondaryText: "#2d2d2d",
        otherColor: "#e6efe5",
        whiteTextTransparent: "#e6efe58a",
      },
      fontFamily: {
        AlfaSlabOne: ["Alfa Slab One"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.4rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "4rem",
        "7xl": "6rem",
        "8xl": "7rem",
        "9xl": "11rem",
      },
    },
  },
  plugins: [],
};
