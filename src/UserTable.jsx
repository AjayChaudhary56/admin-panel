import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import "./App.css";

const columns = [
  { id: "name", label: "Id", minWidth: 17 },
  { id: "code", label: "Name", minWidth: 100 },
  {
    id: "population",
    label: "Location",
    minWidth: 100,
  },
  {
    id: "citizenship",
    label: "Citizenship Id",
  },
  {
    id: "size",
    label: "Phone Number",
    minWidth: 100,
  },
  {
    id: "density",
    label: "Email Address",
    minWidth: 150,
  },

  { id: "button", label: "Details", minWidth: 100 },
];

function createData(
  name,
  code,
  population,
  citizenship,
  size,
  density,
  button
) {
  return { name, code, population, citizenship, size, density, button };
}

const rows = [
  createData(
    1,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    2,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    3,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    4,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    5,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    6,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    7,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    8,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    9,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    10,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
  createData(
    11,
    "Ajay Chaudhary",
    "Pokhara",
    546486400484,
    9800754545,
    "iamazoy110125@gmail.com",
    <Button variant="contained">View Details</Button>
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
