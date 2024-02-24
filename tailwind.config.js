module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue_gray: { 400: "#8b8b8b" },
        gray: { 100: "#f7f7f7", 300: "#e5e2de", 900: "#20201f" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { worksans: "Work Sans", roboto: "Roboto" },
      boxShadow: { bs: "0px 0px  1px 0px #ffffff" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
