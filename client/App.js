import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Home from "./components/Home";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 330,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#1E9AAA",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#06d6a0",
      contrastText: "#4e4e4e",
    },
    text: {
      primary: "#4e4e4e",
    },
    info: {
      main: "#fdb000",
      contrastText: "#F8F8F8",
    },
    success: {
      main: "#06d6a0",
      contrastText: "#4e4e4e",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
