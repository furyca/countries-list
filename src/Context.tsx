import { ReactNode, createContext, useState } from "react";
import { CountryProps, ValuesType } from "./types/dataTypes";

export const Context = createContext({
  searchInput: "search:  group:",
  setSearchInput: (searchInput: string) => {},
  filteredResults: [] as CountryProps[],
  setFilteredResults: (filteredResults: CountryProps[]) => {},
  selectedColor: "#0D1282",
  setSelectedColor: (selectedColor: string) => {},
  alert: false,
  setAlert: (alert: boolean) => {},
  countryList: [] as CountryProps[],
  setCountryList: (countryList: CountryProps[]) => {}
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchInput, setSearchInput] = useState<string>("search:  group:");
  const [filteredResults, setFilteredResults] = useState<CountryProps[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("#0D1282");
  const [alert, setAlert] = useState<boolean>(false);
  const [countryList, setCountryList] = useState<CountryProps[]>([])

  const values: ValuesType = {
    searchInput,
    setSearchInput,
    filteredResults,
    setFilteredResults,
    selectedColor,
    setSelectedColor,
    alert,
    setAlert,
    countryList,
    setCountryList
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
