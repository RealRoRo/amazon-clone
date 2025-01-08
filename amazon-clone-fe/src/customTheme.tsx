import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    yellow: Palette["primary"];
    green: Palette["primary"];
    blue: Palette["primary"];
    red: Palette["primary"];
  }

  interface PaletteOptions {
    yellow?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
  }
}
