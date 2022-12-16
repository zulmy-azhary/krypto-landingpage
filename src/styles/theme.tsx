import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  media: {
    mobile: "375px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1440px",
  },
  colors: {
    background: {
      paper: "#FFFFFF",
      default: "#F9FAFC",
    },
    text: {
      primary: "#111827",
      secondary: "#6B7280",
      disabled: "hsla(217, 19%, 27%, 0.48)",
    },
    primary: {
      main: "#5048E5",
      dark: "#3832A0",
      light: "#828DF8",
    },
    secondary: {
      main: "#10B981",
    },
    action: {
      active: "#6B7280",
      disabled: "hsla(217, 19%, 27%, 0.26)",
      disabledBackground: "hsla(217, 19%, 27%, 0.12)",
    },
    others: {
      contrast: "#FFFFFF",
      divider: "#D1D5DB",
    },
    components: {
      outline: "#D1D5DB",
    },
    neutral: {
      "900": "#111827",
      "500": "#D1D5DB",
      "400": "#9CA3AF",
      "300": "#D1D5DB"
    }
  },
};

// background: "hsl(228, 29%, 90%)",