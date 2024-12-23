import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";




// Definimos un tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      light: "#63a4ff", // Color claro
      main: "#1976d2", // Color principal
      dark: "#004ba0", // Color oscuro
      contrastText: "#fff", // Texto de contraste
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Reporte de métricas (opcional)
reportWebVitals();


