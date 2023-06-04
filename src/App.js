import React from "react";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
