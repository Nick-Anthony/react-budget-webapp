import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";

import { Box, CssBaseline } from "@mui/material";
import TopAppBar from "./assets/components/TopAppBar.tsx";
import SideBar from "./assets/components/SideBar.tsx";
import theme from "./theme.tsx";
import Layout from "./Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Layout>
          <App />
        </Layout>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
