import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App.jsx";
import StateProvider from "./components/StateProvider.jsx";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background-color: ${(props) => props.theme.colors.background};
  font-size: 62.5%;
}

body {
  font-size: 1.5rem;
  color: #FFFFFF;
}
`;

const theme = {
  colors: {
    primary: "#333333", // Dark Gray
    secondary: "#0F172A", // Slate 900
    background: "#111827", // Gray 900
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StateProvider>
  </StrictMode>
);
