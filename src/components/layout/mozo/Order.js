import React from "react";
import { Grid, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OrderFooter from "./OrderFooter";
import { comanda } from "../../../utils/database";
import { connect } from "react-redux";
import { addItem } from "../../../redux/actions/orderAction";

//----- Componente de Menu de Items ---- //

const useStyle = makeStyles(() => ({
  test: {
    background: purple[500],
  },
}));

const Order = ({ orders }) => {
  const order = orders[2];
  // console.log(orders);
  const classes = useStyle();
  return (
    <div>
      <Grid container spacing={1} justify="center">
        {/* header de Menu */}
        <Grid item md={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Comanda {order.numero}</TableCell>
                  <TableCell>Mesa: {order.mesa} </TableCell>
                  <TableCell>Mozo: Peter</TableCell>
                  <TableCell>Hora: {order.date} </TableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* descripción de items */}
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
                  {order.dishes.map((item) => (
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
                        {item.despachado.toString()}
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
