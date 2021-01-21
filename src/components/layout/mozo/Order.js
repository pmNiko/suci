import React from "react";
import { Grid, Box } from "@material-ui/core/";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OrderFooter from "./OrderFooter";
import { connect } from "react-redux";

//----- Componente de Menu de Items ---- //

const Order = ({ orders }) => {
  const order = orders[0];
  // console.log("Order.js: ", order.dishes[0]);
  return (
    <div>
      <Grid container spacing={1} justify="center">
        <Grid item md={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Comanda {order?.number}</TableCell>
                  <TableCell>Mesa: {order?.table} </TableCell>
                  <TableCell>Fecha: {order?.date}</TableCell>
                  <TableCell>Hora: {order?.time} </TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item md={12}>
          <Box m={2} mb={3}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Plato</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.dishes?.map((item) => (
                    <TableRow key={1}>
                      <TableCell component="th" scope="row">
                        <span class="material-icons">delete_outline</span>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.price}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <span class="material-icons">add_circle_outline</span>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <span class="material-icons">
                          remove_circle_outline
                        </span>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.state && "pendiente"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box border={0} m={2} align="center">
            <OrderFooter />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(Order);
