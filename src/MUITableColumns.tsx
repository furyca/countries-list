import { Box } from "@mui/material";
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from "@mui/x-data-grid";

/*
  Column settings for Material UI Data Grid component
*/

const getLanguages = ({ row: { languages } }: GridValueGetterParams) => {
  if (!languages || languages.length === 0) {
    return "";
  }
  const languageList = languages.map((language: {name: string}) => ` ${language.name}`);
  return `${languageList || ""}`;
};

export const columns: GridColDef[] = [
  {
    field: "emoji",
    headerName: "Flag",
    flex: 1,
    sortable: false,
    renderCell: ({value}: GridRenderCellParams) => {
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
    renderCell: ({id, value}: GridRenderCellParams) => {
      if (id.toString().length > 2) {
        return <Box sx={{ fontWeight: 'bold', color: 'gray', letterSpacing: {xs: 2, md: 6}}}>{value}</Box>;
      }
    }, 
  },
  { field: "capital", headerName: "Capital", flex: 2, sortable: false },
  {
    field: "continent",
    headerName: "Continent",
    flex: 2,
    sortable: false,
    valueGetter: ({ row: { continent } }: GridValueGetterParams) => {
      return continent.name;
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
