import "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    measure: {
      sideBarWidth: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    measure?: {
      sideBarWidth?: string;
    };
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }
}
