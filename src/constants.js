export const COLORS = {
  primary: "hsl(240deg 80% 60%)",
  gray50: "hsl(0deg 0% 95%)",
  gray300: "hsl(0deg 0% 75%)",
  gray500: "hsl(0deg 0% 50%)",
  gray700: "hsl(0deg 0% 40%)",
  black: "hsl(0deg 0% 0%)",
  transparentGray15: "hsl(0deg 0% 50% / 0.15)",
  transparentGray35: "hsl(0deg 0% 50% / 0.35)",
};

export const PROGRESS_BAR_MAX_WIDTH = 370;

export const WRAPPER_SIZES = {
  small: {
    "--height": "8px",
    "--width": `${PROGRESS_BAR_MAX_WIDTH}px`,
    "--padding": "initial",
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--width": `${PROGRESS_BAR_MAX_WIDTH}px`,
    "--padding": "initial",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "24px",
    "--width": `${PROGRESS_BAR_MAX_WIDTH + 8}px`, // Due to extra padding that comes with the large
    "--padding": "4px",
    "--borderRadius": "8px",
  },
};

export const LOADING_BAR_SIZES = {
  small: {
    "--height": "8px",
  },
  medium: {
    "--height": "12px",
  },
  large: {
    "--height": "16px",
  },
};
