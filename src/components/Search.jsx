import { Box, Button, IconButton, TextField, Tooltip } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";
import AlertBar from "./AlertBar";
import { processInput } from "../helpers/processInput";
import { groupCountries } from "../helpers/groupCountries";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
  searchButton: { bgcolor: "#113476", color: "whitesmoke" },
  infoTooltip: { color: "#508dff"},
};

const validGroupings = ["continent", "language"];

const Search = () => {
  const { searchInput, setAlert, setSearchInput, setFilteredResults, countryList } = useContext(Context);

  //Process the input, filter, optionally group the results and finally set the relevant state or notify
  const handleSearch = (e) => {
    e.preventDefault();

    const [searchValue, groupValue] = processInput(searchInput);

    //filter
    const filteredCountries = countryList.filter((country) =>
      country.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredCountries.length < 1) {
      return setAlert(true);
    }

    validGroupings.includes(groupValue.toLowerCase()) && groupCountries(groupValue, filteredCountries);

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
            borderRadius: "8px",
          },
        }}
        margin="normal"
        onChange={handleInput}
      />
      <Box display="flex" gap={2}>
        <Button variant="contained" size="large" sx={styles.searchButton} onClick={(e) => handleSearch(e)}>
          Search
        </Button>

        <Tooltip title="Currently available groupings are 'language' and 'continent'" arrow>
          <IconButton sx={styles.infoTooltip}>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <AlertBar />
    </Box>
  );
};

export default Search;
