import React from "react";
import { Grid, Typography, Box } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addItem } from "../../../redux/actions/orderAction";
// consulta a la  API Graphql
import { useMutation } from "@apollo/react-hooks";
import { ADD_ITEM } from "../../../services/Mutations";

// ----- Componente encargado de mostrar los items -----
const MenuItems = ({ dishes, add }) => {
  // instaciamos la mutación que vamos a utilizar
  const [addDishToOrder] = useMutation(ADD_ITEM);

  // Funciones
  const addDish = async (item_id) => {
    await addDishToOrder({
      variables: {
        order_id: order_id,
        dish_id: item_id,
      },
    })
      .then((result) => {
        let { dishes } = result.data.addDishToOrder;
        let loadedItem = dishes[dishes.length - 1];
        add({ ...loadedItem, order_id });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const order_id = "60099cd05b26f906d3795594";
  return (
    <Grid item md={12}>
      {dishes.map((item) => (
        <Box m={3}>
          <Grid
            container
            key={item._id}
            direction="row"
            justify="space-between"
          >
            <Typography>{item.name}</Typography>
            <Typography>{item.price}</Typography>
            <Button
              variant="text"
              color="primary"
              onClick={() => addDish(item._id)}
            >
              Agregar
            </Button>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(MenuItems);
