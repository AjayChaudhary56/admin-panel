import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import "./App.css";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

function createData(
  id,
  City,
  Area,
  LandPrice,
  Address,
  WardNumber,
  status,
  button,
  remark
) {
  return {
    id,
    City,
    "Area (sq)": Area,
    "Land Price(in Npr)": LandPrice,
    Address,
    "Ward Number": WardNumber,
    Status: status,
    Button: button,
    Remarks: remark,
  };
}

const rows = [
  createData(
    1,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Approved",
    <Button variant="contained">View Details</Button>,
  
    <Box>
    <Grid  sx={{display:'flex'}}>
      <Grid item sx={{ paddingRight:'5px'}}>
        <Button variant="contained">r </Button>
      </Grid>
      <Grid item>
        <Button variant="contained">l </Button>,
      </Grid>
    </Grid>
</Box>
    // {Status === 'Approved' ? "Approved" : ""}
  ),
  createData(
    2,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Pending",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    3,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Approved",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    4,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Pending",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    5,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Pending",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    6,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Pending",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    7,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Pending",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    8,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Pending",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    9,
    "Pokhara",
    456,
    10000000,
    "Pokhara",
    16,
    "Pending",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    10,
    "Pokhara",
    456,
    10000000,
    "Ktm",
    16,
    "Approved",
    <Button variant="contained">View Details</Button>
  ),
];

export default function StickyHeadTable1() {
  //   const [page, setPage] = React.useState(0);
  //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //   const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  //   };
  const columns = Object.keys(rows[0]).map((column) => {
    return {
      field: column,
      headerName: column,
      width: 150,
      renderCell: (params) => {
        return column === "Remarks"
          ? rows[0].Remarks
          : column === "Button"
          ? rows[0].Button
          : null;
        },
      };
    });
    console.log(rows[0].Status === 'Pending');

  // console.log(columns.field[0])

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        autoHeight
        rowsPerPageOptions={[5]}
        onRowClick={(item) => {
          //   setEditData(item.row);
        }}
        //   disableSelectionOnClick
      />
    </Paper>
  );
}
