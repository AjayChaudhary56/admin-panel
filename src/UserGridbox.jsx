import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
  },
  {
    field: "citizenshipNo",
    headerName: "Citizen No",
    width: 200,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 200,
  },
  {
    field: "emailId",
    headerName: "Email Id",
    width: 200,
    editable: true,
  },
  {
    field: "detail",
    headerName: "Details",
    width: 200,
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
    id: 0,
    name: "Ajay Chaudhary",
    location: "Pokhara",
    citizenshipNo: "123456789",
    phoneNumber: 9800754545,
    emailId: "iamazoy110125@gmail.com",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 1,
    name: "Ajay Chaudhary",
    location: "Pokhara",
    citizenshipNo: "123456789",
    phoneNumber: 9800754545,
    emailId: "iamazoy110125@gmail.com",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 2,
    name: "Ajay Chaudhary",
    location: "Pokhara",
    citizenshipNo: "123456789",
    phoneNumber: 9800754545,
    emailId: "iamazoy110125@gmail.com",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 3,
    name: "Ajay Chaudhary",
    location: "Pokhara",
    citizenshipNo: "123456789",
    phoneNumber: 9800754545,
    emailId: "iamazoy110125@gmail.com",
    detail: <Button variant="contained">View Details</Button>,
  },
  {
    id: 4,
    name: "Ajay Chaudhary",
    location: "Pokhara",
    citizenshipNo: "123456789",
    phoneNumber: 9800754545,
    emailId: "iamazoy110125@gmail.com",
    detail: <Button variant="contained">View Details</Button>,
  },
];

export default function DataGridDemo() {
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
