import React, { useState } from "react";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Provider } from "react-translated";
import translation from "./translations";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Provider language={language} translation={translation}>
      <ThemeProvider theme={theme}>
        <div style={{ position: "absolute", right: "30px", top: "30px" }}>
          <button
            style={{ width: " 50px", height: "40px", marginRight: "10px" }}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            style={{ width: " 50px", height: "40px" }}
            onClick={() => setLanguage("no")}
          >
            NO
          </button>
        </div>
        <MainContent />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
