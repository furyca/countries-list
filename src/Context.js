import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("search:  group:");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#0D1282");
  const [alert, setAlert] = useState(false);
  const [countryList, setCountryList] = useState([])

  const values = {
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
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
