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
import Detail from "./Detail";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 500,
  },
});

const Tickets = ({ orders, setDetail }) => {
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

  const detailFilter = (order_id) => {
    setDetail(order_id);
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nº</TableCell>
              <TableCell align="center">Comanda</TableCell>
              <TableCell align="center">Mesa</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Pagada</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order, index) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={index}
                  onClick={() => {
                    detailFilter(order._id);
                  }}
                >
                  <TableCell key={order._id} align="center">
                    {index}
                  </TableCell>
                  <TableCell key={order._id} align="center">
                    {order.number}
                  </TableCell>
                  <TableCell key={order._id} align="center">
                    {order.table}
                  </TableCell>
                  <TableCell key={order._id} align="center">
                    {order.closed ? "Cerrada" : "Abierta"}
                  </TableCell>
                  <TableCell key={order._id} align="center">
                    {order.paid ? "Si" : "No"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Tickets;
