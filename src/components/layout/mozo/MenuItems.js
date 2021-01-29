import React from "react";
import { Grid, Typography, Box, Paper } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addItem } from "../../../redux/actions/orderAction";
// consulta a la  API Graphql
import { useMutation } from "@apollo/react-hooks";
import { ADD_ITEM } from "../../../services/Mutations";
import { useParams } from "react-router-dom";

// ----- Componente encargado de mostrar los items ----- //
const MenuItems = ({ dishes, add }) => {
  const { order_id_param } = useParams();
  const order_id = order_id_param;
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

  return (
    <Paper style={{ height: 400, overflow: "auto" }}>
      <Grid item md={12}>
        {dishes.map((item) => (
          <Box m={3} border={0} borderRadius={10} boxShadow={3}>
            <Grid
              container
              key={item._id}
              direction="row"
              justify="space-between"
            >
              <Box style={{ width: "30%" }}>
                <Typography>{item.name}</Typography>
              </Box>
              <Box style={{ width: 50 }}>
                <Typography>{item.price}</Typography>
              </Box>
              <Box>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => addDish(item._id)}
                >
                  Agregar
                </Button>
              </Box>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(MenuItems);
