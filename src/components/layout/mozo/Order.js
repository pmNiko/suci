import React from "react";
import { Grid, Box } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OrderFooter from "./OrderFooter";
import { connect } from "react-redux";
import { removeItem } from "../../../redux/actions/orderAction";

//----- Componente de Menu de Items ---- //

const Order = ({ orders, remove }) => {
  const order = orders[0];
  // console.log("Order.js: ", order.dishes[0]);

  const removeDish = (item, order_id) => {
    // console.log({ ...item, order_id });
    remove({ ...item, order_id });
  };

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
                    <TableCell>Eliminar</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Quitar</TableCell>
                    <TableCell>Agregar</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.dishes?.map((item) => (
                    <TableRow key={1}>
                      <TableCell component="th" scope="row">
                        <IconButton
                          aria-label="delete"
                          onClick={() => removeDish(item, order._id)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.count}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <IconButton
                          aria-label="RemoveCircleOutlineIcon"
                          onClick={() => {
                            console.log("Quitar");
                          }}
                        >
                          <RemoveCircleOutlineIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <IconButton
                          aria-label="AddCircleOutlineIcon"
                          onClick={() => {
                            console.log("Agregar");
                          }}
                        >
                          <AddCircleOutlineIcon fontSize="small" />
                        </IconButton>
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

        <OrderFooter />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (item) => dispatch(removeItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
