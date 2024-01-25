import Header2 from "./components/header/Header2";
import Header1 from "./components/header/Header1";
import Header3 from "./components/header/Header3";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./components/hero/Hero";
import Main from "./components/main-content/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box
          sx={{
            bgcolor:
              // @ts-ignore
              theme.palette.backgroundColor.main,
          }}
        >
          <Hero />
          <Main />
        </Box>
        <ScrollToTop />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
