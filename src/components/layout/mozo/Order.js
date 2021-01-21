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
import {
  removeItem,
  incrementItem,
  decrementItem,
} from "../../../redux/actions/orderAction";
// consulta a la  API Graphql
import { useMutation } from "@apollo/react-hooks";
import {
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../../../services/Mutations";

//----- Componente de Menu de Items ---- //

const Order = ({ orders, remove, inc, dec }) => {
  const order = orders[0];
  // Eliminación de un item de la comanda
  const [popDishToOrder] = useMutation(REMOVE_ITEM);

  const removeDish = async (item, order_id) => {
    await popDishToOrder({
      variables: {
        order_id: order_id,
        dish_id: item._id,
      },
    })
      .then((result) => {
        let { dishes } = result.data.popDishToOrder;
        // console.log(dishes); //ya no se encuentra el item incluido
        remove({ ...item, order_id });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Incrementa la cantidad de un item de la comanda
  const [incrementDishToOrder] = useMutation(INCREMENT_ITEM);

  const incrementDish = async (item, order_id) => {
    await incrementDishToOrder({
      variables: {
        order_id: order_id,
        dish_id: item._id,
      },
    })
      .then((result) => {
        let { dishes } = result.data.incrementDishToOrder;
        // console.log("Dishes: ", dishes); //aumento la cantidad
        inc({ ...item, order_id });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Decrementa la cantidad de un item de la comanda
  const [decrementDishToOrder] = useMutation(DECREMENT_ITEM);

  const decrementDish = async (item, order_id) => {
    await decrementDishToOrder({
      variables: {
        order_id: order_id,
        dish_id: item._id,
      },
    })
      .then((result) => {
        let { dishes } = result.data.decrementDishToOrder;
        // console.log("Dishes: ", dishes); //aumento la cantidad
        dec({ ...item, order_id });
      })
      .catch((error) => {
        console.log(error);
      });
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
                          onClick={() => decrementDish(item, order._id)}
                        >
                          <RemoveCircleOutlineIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <IconButton
                          aria-label="AddCircleOutlineIcon"
                          onClick={() => incrementDish(item, order._id)}
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
    inc: (item) => dispatch(incrementItem(item)),
    dec: (item) => dispatch(decrementItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
