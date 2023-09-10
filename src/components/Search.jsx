import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";
import AlertBar from "./AlertBar";

const container_style = {
  width: "90%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

const textfield_style = { width: {xs: "90%", md: '60%', lg: '50%'}, bgcolor: "#00000099", borderRadius: "12px" }

const Search = ({ countryList }) => {
  const context = useContext(Context);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = context.searchInput;

    const trimColons = searchInput
      .replace(/: */g, ":")
      .replace(/search */g, "search")
      .replace(/group */g, "group");

    //colon use
    if (trimColons.includes("search:")) {
      const arr = trimColons.split(" ");
      const searchValue = arr[0].split(":")[1];
      const groupValue = arr[1]?.split(":")[1];

      const filteredCountries = countryList.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (groupValue === "continent") {
        filteredCountries.sort((a, b) =>
          a.continent.name > b.continent.name
            ? 1
            : a.continent.name < b.continent.name
            ? -1
            : 0
        );
      } else if (groupValue === "language") {
        filteredCountries.sort((a, b) =>
          a.languages[0]?.name > b.languages[0]?.name
            ? 1
            : a.languages[0]?.name < b.languages[0]?.name
            ? -1
            : 0
        );
      }

      context.setFilteredResults(filteredCountries);

      filteredCountries.length < 1 && context.setAlert(true);
    }
    //keyword search
    else {
      const words = context.searchInput.split(" ");

      let results = [];

      for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < countryList.length; j++) {
          if (
            countryList[j].name
              .toLowerCase()
              .includes(words[i].toLowerCase()) &&
            !results.includes(countryList[j])
          ) {
            results.push(countryList[j]);
          }
        }
      }
      results.length < 1 && context.setAlert(true);
      context.setFilteredResults(results);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={container_style}
    >
      <TextField
        variant="outlined"
        label="Search"
        sx={textfield_style}
        InputProps={{
          sx: {
            borderRadius: "12px",
          },
        }}
        margin="normal"
        onChange={(e) => context.setSearchInput(e.target.value)}
      />
      <Box sx={{bgcolor: "#00000099", padding: '1rem', marginBottom: '1rem', borderRadius: '12px'}}>
        <Typography  sx={{ textShadow: "2px 0 3px black" }}>
          To filter&group use the following syntax: 'search: value group: value'
        </Typography>
      </Box>
      
      <Button variant="contained" size="large" sx={{bgcolor: '#113476', color: 'whitesmoke'}} onClick={(e) => handleSearch(e)}>
        Search
      </Button>
      <AlertBar />
    </Box>
  );
};

export default Search;
