"use client";
import { createTheme, Theme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      light: "#2162a1",
      main: "#232F3E",
      dark: "#131921",
    },
    secondary: {
      main: "#FF5049",
    },
    common: { black: "#000", white: "#fff" },
    yellow: {
      light: "#febd69",
      main: "#ffd814",
      dark: "#ffa41c",
    },
    yellowHover: {
      light: "#f3a847",
      main: "#ffce12",
      dark: "#fa8900",
    },
    green: { main: "#7fda69" },
    blue: { light: "#007185", main: "#2162a1" },
    red: { light: "#CC0C39", main: "#b12704" },
    grey: {
      "100": "e6e6e6",
      "200": "#DDDDDD",
      "300": "#CCCCCC",
      "400": "#999999",
      "500": "#565959",
      "600": "#333333",
      "700": "#111111",
      "800": "#111111", // not using
      "900": "#0F1111",
    },
    text: { primary: "#0F1111", secondary: "#565959" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({
          ownerState,
          theme,
        }: {
          ownerState: { color?: string };
          theme: Theme;
        }) => ({
          ...(ownerState.color === "yellowLight" && {
            backgroundColor: theme.palette.yellow.light,
            "&:hover": {
              backgroundColor: theme.palette.yellowHover.light,
            },
          }),
          ...(ownerState.color === "yellowDark" && {
            backgroundColor: theme.palette.yellow.dark,
            "&:hover": {
              backgroundColor: theme.palette.yellowHover.dark,
            },
          }),
          ...(ownerState.color === "yellow" && {
            "&:hover": {
              backgroundColor: theme.palette.yellowHover.main,
            },
          }),
        }),
      },
    },
  },
});

export default theme;
