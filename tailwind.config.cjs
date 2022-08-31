/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        fontcolor: "var(--fontcolor)",
        green: "var(--green)",
        blue: "var(--blue)",
        cyan: "var(--cyan)",
        pink: "var(--pink)",
        fend: "var(--fend)",
        link: "var(--link)",
      },
    },
  },
  plugins: [],
};
