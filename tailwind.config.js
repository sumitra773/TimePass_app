/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-neutral": "#EFF5FF",
      "mf-border-color": "#D6D9E6",
      denim: "#022959",
      grey: "#9699AA",
      lightblue: "#ABBCFF",
      lightgrey: "#D6D9E6",
      orange: "#FFAF7E",
      pink: "#F9818E",
      purple: "#483EFF",
      red: "#EE374A",
      skyblue: "#BEE2FD",
      verylightgrey: "#F8F9FF",
      white: "#FFFFFF",
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
