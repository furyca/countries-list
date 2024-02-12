/*
  Column settings for Material UI Data Grid component
*/

import { Box } from "@mui/material";

const getLanguages = (params) => {
  const languages = params.row.languages.map((language) => ` ${language.name}`);
  return `${languages || ""}`;
};

export const columns = [
  {
    field: "emoji",
    headerName: "Flag",
    flex: 1,
    sortable: false,
    renderCell: ({value}) => {
      return <div style={{ fontSize: "2rem" }}>{value}</div>;
    },
  },
  { field: "name", headerName: "Name", flex: 2, sortable: false},
  { field: "native", headerName: "Native Name", flex: 2, sortable: false },
  {
    field: "languages",
    headerName: "Languages",
    flex: 4,
    valueGetter: getLanguages,
    headerAlign: "center",
    sortable: false,
    align: "center",
    renderCell: (params) => {
      if (params.id.length > 2) {
        return <Box sx={{ fontWeight: 'bold', color: 'gray', letterSpacing: {xs: 2, md: 6}}}>{params.value}</Box>;
      }
    }, 
  },
  { field: "capital", headerName: "Capital", flex: 2, sortable: false },
  {
    field: "continent",
    headerName: "Continent",
    flex: 2,
    sortable: false,
    valueGetter: (params) => {
      return params.row.continent.name;
    },
  },
];

export const mobile_columns = {
  emoji: false,
  name: true,
  native: false,
  languages: true,
  capital: false,
  continent: true,
};
export const all_columns = {
  emoji: true,
  name: true,
  native: true,
  languages: true,
  capital: true,
  continent: true,
};
