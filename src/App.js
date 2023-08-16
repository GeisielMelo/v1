import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Index from "./pages/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Index />;
    </ThemeProvider>
  );
}

export default App;
