import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/shared/theme";
import { MainPageConnector } from "@/pages";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPageConnector />
    </ThemeProvider>
  );
}
