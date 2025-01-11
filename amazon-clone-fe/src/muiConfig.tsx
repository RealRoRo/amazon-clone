import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    yellow: Palette["primary"];
    yellowHover: Palette["primary"];
    green: Palette["primary"];
    blue: Palette["primary"];
    red: Palette["primary"];
  }

  interface PaletteOptions {
    yellow?: PaletteOptions["primary"];
    yellowHover?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    yellow: true;
    yellowLight: true;
    yellowDark: true;
  }
}
