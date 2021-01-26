import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "code", label: "Item", minWidth: 80 },
  { id: "number", label: "Numero", minWidth: 200 },
  {
    id: "table",
    label: "Mesa",
    minWidth: 100,
    align: "center",
  },
  {
    id: "state",
    label: "Estado",
    minWidth: 200,
    align: "center",
  },
];

function createData(code, number, table, state) {
  return { code, number, table, state };
}

const rows = [
  createData(2, "ORD-000000", 4, "Impaga"),
  createData(3, "ORD-000001", 3, "Pagada"),
  createData(4, "ORD-000002", 5, "Impaga"),
  createData(5, "ORD-000003", 9, "Impaga"),
  createData(6, "ORD-000004", 6, "Pagada"),
  createData(7, "ORD-000005", 7, "Impaga"),
  createData(8, "ORD-000006", 0, "Impaga"),
  createData(9, "ORD-000007", 8, "Impaga"),
  createData(10, "ORD-000008", 2, "Pagada"),
  createData(11, "ORD-000009", 4, "Pagada"),
  createData(12, "ORD-0000010", 3, "Pagada"),
  createData(13, "ORD-0000011", 4, "Impaga"),
  createData(14, "ORD-0000012", 3, "Pagada"),
  createData(15, "ORD-0000013", 5, "Impaga"),
  createData(16, "ORD-0000014", 9, "Impaga"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 500,
  },
});

const Tickets = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
                        <TableCell
                          key={column.id}
                          align={column.align}
                          onClick={() => {
                            alert(row.number);
                          }}
                        >
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
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Tickets;
