import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import PoppinsTtf from "./fonts/Poppins-Regular.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial",
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#7895CB",
    },
    accent: {
      main: "#A0BFE0",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f8f8fc",
    },
  },
  measure: {
    sideBarWidth: "260px",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          src: url(${PoppinsTtf});`,
    },
  },
});

export default theme;
