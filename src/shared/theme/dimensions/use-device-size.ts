import { breakpoints, useWindowDimensions } from ".";

export const useDeviceSize = () => {
  const { width } = useWindowDimensions();

  if (width >= breakpoints.desktop) {
    return "lg";
  }

  if (width >= breakpoints.tablet) {
    return "md";
  }

  return "sm";
};
