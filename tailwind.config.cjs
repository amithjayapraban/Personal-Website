const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

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
        card:"var(--card)"
      },
    },
  },

  plugins: [],
};

module.exports = config;
