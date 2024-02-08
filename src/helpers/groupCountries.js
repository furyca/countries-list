export const groupCountries = (groupValue, filteredCountries) => {
  if (groupValue === "continent") {
    filteredCountries.sort((a, b) =>
      a.continent.name > b.continent.name ? 1 : a.continent.name < b.continent.name ? -1 : 0
    );
  }
  else if (groupValue === "language") {
    filteredCountries.sort((a, b) =>
      a.languages[0]?.name > b.languages[0]?.name ? 1 : a.languages[0]?.name < b.languages[0]?.name ? -1 : 0
    );
  }
};
