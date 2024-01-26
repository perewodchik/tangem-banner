export const transitionDuration = 300;

export const defaultStyle = {
  transition: `all ${transitionDuration}ms ease-in-out`,
  opacity: 0.01,
};

export const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};
