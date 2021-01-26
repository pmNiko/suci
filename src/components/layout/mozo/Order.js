import React from "react";
import { Grid, Box, Checkbox } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
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
  removeOrder,
  dishesPreparingToOrder,
  dishDelivered,
  dishReady,
} from "../../../redux/actions/orderAction";
import { resetTable } from "../../../redux/actions/tableAction";
// consulta a la  API Graphql
import { useMutation } from "@apollo/react-hooks";
import {
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ORDER,
  DISHES_PREPARING,
} from "../../../services/Mutations";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";

//----- Componente de Menu de Items ---- //

const Order = ({
  orders,
  remove,
  inc,
  dec,
  removeOrder,
  resetTable,
  dishesPreparing,
  dishDelivered,
  dishReady,
}) => {
  const onTable = (order_id, dish) => {
    let dish_id = dish._id;
    if (dish.state === "ready") {
      dishDelivered({ order_id, dish_id });
    } else {
      dishReady({ order_id, dish_id });
    }
  };
  const history = useHistory();

  const { order_id_param } = useParams();
  const order = orders.filter((order) => order._id === order_id_param)[0];

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

  // Elimina la comanda
  const [deleteOrder] = useMutation(REMOVE_ORDER);

  const popOrder = async (order_id, table) => {
    await deleteOrder({
      variables: {
        order_id: order_id,
      },
    })
      .then((result) => {
        // let { order } = result.data.deleteOrder;
        removeOrder(order_id);
        resetTable(table);
        history.push("/floor");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Cambia el estado de los items a ready
  const [dishPreparingToOrder] = useMutation(DISHES_PREPARING);
  const sendKitchen = async () => {
    let order_id = order._id;
    let dishes_pending = order.dishes.filter(
      (dish) => dish.state === "pending"
    );
    let dishes = [];
    dishes_pending.map((dish) => dishes.push(dish._id));
    dishesPreparing({ dishes, order_id });
    await dishPreparingToOrder({
      variables: {
        order_id: order_id,
        dishes: dishes,
      },
    })
      .then((result) => {
        let { dishes } = result.data.dishPreparingToOrder;
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
                  <TableCell>
                    <IconButton aria-label="RemoveCircleOutlineIcon">
                      <DeleteSweepIcon
                        fontSize="small"
                        onClick={() => {
                          popOrder(order._id, order.table);
                        }}
                      />
                    </IconButton>{" "}
                  </TableCell>
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
                    <TableCell align="center">Quitar</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell>Acción</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order?.dishes !== undefined &&
                    order.dishes?.map((item, index) => (
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
                        <TableCell component="th" scope="row" align="center">
                          {item.state === "pending" && (
                            <IconButton
                              aria-label="RemoveCircleOutlineIcon"
                              onClick={() => decrementDish(item, order._id)}
                            >
                              <RemoveCircleOutlineIcon fontSize="small" />
                            </IconButton>
                          )}
                        </TableCell>
                        <TableCell component="th" scope="row" align="center">
                          {item.count}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item.state === "pending" && (
                            <IconButton
                              aria-label="AddCircleOutlineIcon"
                              onClick={() => incrementDish(item, order._id)}
                            >
                              <AddCircleOutlineIcon fontSize="small" />
                            </IconButton>
                          )}
                          {item.state === "ready" && (
                            <Checkbox
                              checked={false}
                              onChange={() => {
                                onTable(order._id, item);
                              }}
                              color="primary"
                            />
                          )}
                          {item.state === "delivered" && (
                            <Checkbox
                              checked={true}
                              onChange={() => {
                                onTable(order._id, item);
                              }}
                              color="primary"
                            />
                          )}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item.state === "pending" && "Pendiente"}
                          {item.state === "preparing" && "Preparando"}
                          {item.state === "ready" && "Listo"}
                          {item.state === "delivered" && "En mesa"}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <OrderFooter sendKitchen={sendKitchen} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (item) => dispatch(removeItem(item)),
    inc: (item) => dispatch(incrementItem(item)),
    dec: (item) => dispatch(decrementItem(item)),
    removeOrder: (order_id) => dispatch(removeOrder(order_id)),
    resetTable: (number) => dispatch(resetTable(number)),
    dishesPreparing: (payload) => dispatch(dishesPreparingToOrder(payload)),
    dishDelivered: (payload) => dispatch(dishDelivered(payload)),
    dishReady: (payload) => dispatch(dishReady(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
