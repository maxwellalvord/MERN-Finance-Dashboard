export const tokens = {
  grey: {
    100: "#f5f1fe",
    200: "#ebe4fd",
    300: "#e0d6fc",
    400: "#d6c9fb",
    500: "#ccbbfa",
    600: "#a396c8",
    700: "#7a7096",
    800: "#524b64",
    900: "#292532"
  },
  primary: {
    100: "#dbcdea",
    200: "#b79bd4",
    300: "#9468bf",
    400: "#7036a9",
    500: "#4c0494",
    600: "#3d0376",
    700: "#2e0259",
    800: "#1e023b",
    900: "#0f011e"
  },
  secondary: {
    100: "#fce2db",
    200: "#f9c5b8",
    300: "#f6a794",
    400: "#f38a71",
    500: "#f06d4d",
    600: "#c0573e",
    700: "#90412e",
    800: "#602c1f",
    900: "#30160f"
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#2d2d34",
    main: "#1f2026",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};