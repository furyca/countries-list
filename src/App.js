import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import Palette from "./components/Palette";
import TopButton from "./components/TopButton";
import Footer from "./components/Footer";

/*
-Suspense
-Typescript
*/

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#051025',
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Palette />
      <CountryList />
      <TopButton />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
