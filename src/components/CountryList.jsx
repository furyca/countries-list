import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const getLanguages = (params) => {
  const languages = params.row.languages.map((language) => ` ${language.name}`);
  return `${languages || ""}`;
};

const columns = [
  {
    field: "emoji",
    headerName: "Flag",
    flex: 1,
    sortable: false,
    renderCell: (params) => {
      const fontSize = "2rem";
      return <div style={{ fontSize }}>{params.value}</div>;
    },
  },
  { field: "name", headerName: "Name", flex: 2, sortable: false },
  { field: "native", headerName: "Native Name", flex: 2, sortable: false },
  {
    field: "languages",
    headerName: "Languages",
    flex: 4,
    valueGetter: getLanguages,
    headerAlign: "center",
    sortable: false,
    align: "center",
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

const CountryList = ({ countryList }) => {
  const context = useContext(Context);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [rowSelectionModel, setRowSelectionModel] = useState(countryList[9].code);
  const [columnVisible, setColumnVisible] = useState(all_columns);

  useEffect(() => {
    const newColumns = matches ? all_columns : mobile_columns;
    setColumnVisible(newColumns);
  }, [matches]);


  useEffect(() => {
    setRowSelectionModel(
      context.filteredResults.length < 10 && context.filteredResults.length > 0
        ? context.filteredResults[context.filteredResults.length - 1].code
        : countryList[9].code
    );
  }, [context.filteredResults, countryList]);

  return (
    <DataGrid
      rows={
        context.filteredResults.length > 0
          ? context.filteredResults
          : countryList
      }
      getRowId={(row) => row.code}
      columns={columns}
      rowSelectionModel={rowSelectionModel}
      onRowSelectionModelChange={(row) => setRowSelectionModel(row)}
      columnVisibilityModel={columnVisible}
      disableColumnMenu
      GridColDef={false}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 15 },
        },
      }}
      pageSizeOptions={[15, 30, 50, 75, 100]}
      sx={{
        width: "90%",
        margin: "2rem auto",
        border: "none",
        userSelect: "none",

        ".MuiDataGrid-row": {
          cursor: "pointer",
        },
        ".MuiDataGrid-row.Mui-selected": {
          bgcolor: context.selectedColor,
        },

        "& .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus ": {
          outline: "none",
        },
      }}
    />
  );
};

export default CountryList;
