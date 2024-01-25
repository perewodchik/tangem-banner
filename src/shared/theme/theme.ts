import { breakpoints } from "./dimensions";

export const theme = {
  colors: {
    common: {
      white: "#fff",
      black: "#000",
    },
    brand: {
      gold: "#D7A830",
    },
    gradients: {
      gold: "linear-gradient(#7D5317, #EDDF95)",
    },
    text: {
      primary: "#ffffff",
      caption: "#6C6C70",
    },
    background: {
      grey: "#FFFFFF1A",
    },
  },
  breakpoints,
} as const;
