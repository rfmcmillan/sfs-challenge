import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import DebtTable from "./components/DebtTable";

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
  const [debts, setDebts] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
      );
      const { data } = response;
      setDebts(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DebtTable debts={debts} />
    </ThemeProvider>
  );
};

export default App;
