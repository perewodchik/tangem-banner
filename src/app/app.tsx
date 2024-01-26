import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/shared/theme";
import { MainPageConnector } from "@/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainPageConnector />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
