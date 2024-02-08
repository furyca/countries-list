import { Box, Button, TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";
import AlertBar from "./AlertBar";
import { processInput } from "../helpers/processInput";
import { groupCountries } from "../helpers/groupCountries";

const styles = {
  container: {
    width: "90%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textfield: {
    width: { xs: "90%", md: "60%", lg: "50%" },
    bgcolor: "#00000099",
    borderRadius: "8px",
  },
  searchButton: { bgcolor: "#113476", color: "whitesmoke" }
};

const validGroupings = ['continent', 'language']

//Depending of the grouping, give margin-top to top element of each group

const Search = ({ countryList }) => {
  const { searchInput, setAlert, setSearchInput, setFilteredResults } = useContext(Context);

  //Process the input, filter, optionally group the results and finally set the relevant state or notify
  const handleSearch = (e) => {
    e.preventDefault();

    const [searchValue, groupValue] = processInput(searchInput)

    //filter
    const filteredCountries = countryList.filter(country =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    if (filteredCountries.length < 1) {
      return setAlert(true);
    }

    validGroupings.includes(groupValue.toLowerCase()) && groupCountries(groupValue, filteredCountries)

    setFilteredResults(filteredCountries);
  };

  //Force the input to include search: and group:
  const handleInput = (e) => {
    const pattern = /^search:[\s\S]*?(?=\s+group:)|^search:[a-zA-Z]+(?:\s+[a-zA-Z]+)? group:[a-zA-Z]+$/i;

    if (pattern.test(e.target.value)) {
      setSearchInput(e.target.value);
    }
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={styles.container}>
      <TextField
        variant="outlined"
        label="Search"
        value={searchInput}
        placeholder="to search&group use the 'search: group: ' syntax"
        sx={styles.textfield}
        InputProps={{
          sx: {
            borderRadius: "12px",
          },
        }}
        margin="normal"
        onChange={handleInput}
      />

      <Button
        variant="contained"
        size="large"
        sx={styles.searchButton}
        onClick={(e) => handleSearch(e)}
      >
        Search
      </Button>
      <AlertBar />
    </Box>
  );
};

export default Search;
