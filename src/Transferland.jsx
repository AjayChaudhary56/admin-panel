import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "previous",
    headerName: "Previous Owner",
    width: 400,
  },
  {
    field: "current",
    headerName: "Current Owner",    
    width: 400,
  },

  {
    field: "detail",
    headerName: "Details",
    width: 400,
    editable: true,
    renderCell: (cellValues) => (
      <Button
        variant="contained"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Print
      </Button>
    ),

    // button:Button
  },
];
const handleClick =(e) => {
    e.preventDefault();
        }

const rows = [
  {
    id: 1,
    previous: "Siddhant Shrestha",
    current: "Ajay Chaudhary",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 2,
    previous: "Siddhant Shrestha",
    current: "Ajay Chaudhary",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 3,
    previous: "Siddhant Shrestha",
    current: "Ajay Chaudhary",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 4,
    previous: "Siddhant Shrestha",
    current: "Ajay Chaudhary",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 5,
    previous: "Siddhant Shrestha",
    current: "Ajay Chaudhary",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 6,
    previous: "Siddhant Shrestha",
    current: "Ajay Chaudhary",
    detail: <Button variant="contained">View Details</Button>,
  },
 
];

export default function DataGridDemo1() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
