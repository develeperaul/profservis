/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  prefix: "tw-",
  theme: {
    extend: {
      borderRadius: {
        lg2: "0.625rem",
      },
      spacing: {
        7.5: "1.88rem",
        10.5: "2.625rem",
      },
    },
    colors: {
      blue: "#243FAD",
      "blue-light": "#C3CFFE",
      "blue-light2": "#F6F8FF",
      white: "#ffffff",
      link: "#4737FF",
      gray: "#E6E6E6",
      menu: "#B8C1E4",
      red: "#B43B3B",
      black: "#000000",
      green: "#15BE44",
      text2: "#565656",
      transparent: "transparent",
    },
    fontSize: {
      t00: ["1.875rem", "normal"],
      t01: ["1.125rem", "normal"],
      t02: ["1rem", "1rem"],
      t03: ["1rem", "normal"],
      t04: ["0.875rem", "115%"],
      t05: ["0.875rem", "110%"],
      t06: ["0.875rem", "normal"],
      t07: ["0.75rem", "noraml"],
    },
    fontFamily: {
      gilroy: "gilroy",
    },
    boxShadow: {
      md: "0px 0px 12px 0px rgba(27, 60, 197, 0.15)",
      base: "0px 0px 12px 0px rgba(0, 0, 0, 0.35)",
      lg: "0px 2px 8px 0px rgba(20, 42, 130, 0.35)",
      input: "0px 0px 12px 2px rgba(0, 0, 0, 0.10)",
      card: " 0px 0px 12px 0px rgba(0, 0, 0, 0.10)",
    },
    dropShadow: {
      input: "0px 0px 12px rgba(0, 0, 0, 0.10)",
    },
    container: {
      padding: "16px",
    },
  },

  plugins: [],
};
