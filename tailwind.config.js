/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  prefix: "tw-",
  theme: {
    extend: {},
    colors: {
      primary: "#482b91",
      secondary: "#f7f8fb",
      yellow: "#fdf7d6",
      blue: "",
      "green-bg": "#edfaf5",
      error: "#e14037",
      "error-bg": "#f5dad9",
      icon: "#a395c2",
      title: "#404241",
      "input-b": "#cccdd0",
      "menu-b": "#55389f",
      border: "#c2c3c6",
      btn: "#eef0ef",
      "btn-press": "#4a2b8c",
      "btn-dis": "#8b7abc",
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
