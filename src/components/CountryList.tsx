import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { GET_COUNTRIES } from "../queries";
import { useQuery } from "@apollo/client";
import { all_columns, columns, mobile_columns } from "../MUITableColumns";
import { Styles } from "../types/styleTypes";

const styles: Styles = {
  list: {
    width: { xs: "95%", md: "80%" },
    margin: "2rem auto",
    border: "none",
    userSelect: "none",
  },
};

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const { filteredResults, selectedColor, countryList, setCountryList } = useContext(Context);
  const [rowSelectionModel, setRowSelectionModel] = useState("");
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up("md"));
  const columnVisible = matches ? all_columns : mobile_columns;
  const isHeader = (id: GridRowId) => id.toString().length > 2;

  useEffect(() => {
    data && setCountryList(data.countries);
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    // Filter the list to get rid of header rows, then select a row
    if (countryList.length > 0) {
      const sanitizeList: () => string = () => {
        if (filteredResults.length > 0) {
          let sanitizedList: { code: string }[] = [...filteredResults];
          sanitizedList = sanitizedList.filter((item: { code: string }) => item.code.length < 3);

          return sanitizedList.length > 9 ? sanitizedList[9].code : sanitizedList[sanitizedList.length - 1]?.code;
        } else {
          return countryList[9].code;
        }
      };

      setRowSelectionModel(sanitizeList());
    }
  }, [filteredResults, countryList]);

  if (loading) return <Typography textAlign={"center"}>Loading...</Typography>;
  else if (error) return <Typography textAlign={"center"}>Couldn't get the data!</Typography>;

  return (
    countryList.length > 0 && (
      <DataGrid
        rows={filteredResults.length > 0 ? filteredResults : countryList}
        getRowId={(row) => row.code}
        getRowClassName={({ id }) => (isHeader(id) ? "groupHeader" : "")}
        getCellClassName={({ id }) => (isHeader(id) ? "no-border" : "")}
        isRowSelectable={({ id }) => !isHeader(id)}
        columns={columns}
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={(row) => {
          row.length > 0 && setRowSelectionModel(row[0].toString() === rowSelectionModel ? "" : row[0].toString());
        }}
        columnVisibilityModel={columnVisible}
        disableColumnMenu
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[15, 30, 50, 75, 100]}
        sx={{
          ...styles.list,
          ".MuiDataGrid-row": {
            cursor: "pointer",
            ":hover": {
              backgroundColor: "transparent",
            },
          },
          ".MuiDataGrid-row.Mui-selected": {
            bgcolor: selectedColor,
          },
          "& .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
          ".groupHeader": {
            my: "2rem",
          },
          ".no-border": {
            border: "none",
            overflow: "unset !important",

            ":hover": {
              bgcolor: "unset",
            },
          },
          ".MuiDataGrid-row.no-border": {
            overflow: "unset",
          },
          ".css-axafay-MuiDataGrid-virtualScroller": {
            overflowX: "hidden",
          },
          ".MuiDataGrid-virtualScroller": {
            "::-webkit-scrollbar": {
              width: 5,
            },
            "::-webkit-scrollbar-track": {
              borderRadius: 10,
            },
            "::-webkit-scrollbar-thumb": {
              background: "#2f2f2f",
              borderRadius: 10,
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "black",
            },
          },
          ".MuiDataGrid-selectedRowCount": {
            visibility: "hidden",
          },
        }}
      />
    )
  );
};

export default CountryList;
