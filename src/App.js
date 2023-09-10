import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import { GET_COUNTRIES } from "./queries";
import { useQuery } from "@apollo/client";
import Palette from "./components/Palette";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#051025',
    },
  }
});

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return
  else if(error) return

  const {countries} = data

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header countryList={countries} />
      <Palette />
      <CountryList countryList={countries} />
    </ThemeProvider>
  );
}

export default App;
