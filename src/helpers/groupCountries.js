import { nanoid } from "nanoid";

/*
  Further processing of the row data became a necessity due to grouping rows being a premium feature of Material UI
*/

const mimicRow = {
  capital: "",
  continent: {},
  emoji: "",
  languages: [],
  name: "",
  native: "",
};

export const groupCountries = (groupValue, filteredCountries) => {
  if (groupValue === "continent") {
    filteredCountries.sort((a, b) =>
      a.continent.name > b.continent.name ? 1 : a.continent.name < b.continent.name ? -1 : 0
    );

    for (let i = 0; i < filteredCountries.length; i++) {
      if (i === 0 || filteredCountries[i].continent.name !== filteredCountries[i - 1].continent.name) {
        filteredCountries.splice(i, 0, {
          ...mimicRow,
          code: nanoid(),
          languages: [{ name: `Continent: ${filteredCountries[i].continent.name}` }],
        });
        i++;
      }
    }
  } else if (groupValue === "language") {
    filteredCountries.sort((a, b) =>
      a.languages[0]?.name > b.languages[0]?.name ? 1 : a.languages[0]?.name < b.languages[0]?.name ? -1 : 0
    );

    for (let i = 0; i < filteredCountries.length; i++) {
      if (i === 0 || filteredCountries[i].languages[0]?.name !== filteredCountries[i - 1].languages[0]?.name) {
        filteredCountries.splice(i, 0, {
          ...mimicRow,
          code: nanoid(),
          languages: [{ name: `First Language: ${filteredCountries[i].languages[0]?.name}` }],
        });
        i++;
      }
    }
  }
};
