import { breakpoints } from "./dimensions";

export const theme = {
  colors: {
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    brand: {
      gold: "#D7A830",
    },
    gradients: {
      gold: "linear-gradient(90deg, #7D5317, #EDDF95)",
    },
    text: {
      primary: "#FFFFFF",
      caption: "#6C6C70",
      goldSubheading: "rgba(210, 152, 26, 0.60)",
    },
    background: {
      grey: "#FFFFFF1A",
      navbar: "#000000DD",
    },
  },
  breakpoints,
} as const;
