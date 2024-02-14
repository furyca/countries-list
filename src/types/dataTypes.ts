import { Dispatch, SetStateAction } from "react";

export type ValuesType = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  filteredResults: CountryProps[];
  setFilteredResults: Dispatch<SetStateAction<CountryProps[]>>;
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  alert: boolean;
  setAlert: Dispatch<SetStateAction<boolean>>;
  countryList: CountryProps[];
  setCountryList: Dispatch<SetStateAction<CountryProps[]>>;
};

export type CountryProps = {
  code: string;
  name: string;
  native: string;
  capital: string;
  emoji: string;
  continent: { name: string };
  languages: { name: string }[];
};
