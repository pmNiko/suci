import React from "react";
import { Grid, Typography, Checkbox, Box, Button } from "@material-ui/core";
import { connect } from "react-redux";
import {
  changeDishReady,
  changeDishPreaping,
} from "../../../redux/actions/orderAction";
// consulta a la  API Graphql
import { useMutation } from "@apollo/react-hooks";
import { DISH_READY, DISH_PREPARING } from "../../../services/Mutations";

export const ContentCard = ({ order, changeDishReady, changeDishPreaping }) => {
  let dishes = order[0].dishes.filter((dish) => dish.state !== "pending");
  let order_id = order[0]._id;

  // Gestiona el cierre de la comanda
  const [dishReady] = useMutation(DISH_READY);
  const [dishPreaping] = useMutation(DISH_PREPARING);
  const handleChange = async (dish_id, state) => {
    if (state === "preparing") {
      changeDishReady({ order_id, dish_id });
      await dishReady({
        variables: {
          order_id: order_id,
          dish_id: dish_id,
        },
      })
        .then((result) => {
          // let { order } = result.data.dishReady;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      changeDishPreaping({ order_id, dish_id });
      await dishPreaping({
        variables: {
          order_id: order_id,
          dish_id: dish_id,
        },
      })
        .then((result) => {
          // let { order } = result.data.payOrder
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      {dishes.map(({ _id, name, state, count }, index) => (
        <Grid item>
          <Grid
            container
            key={index}
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Box style={{ width: 200 }}>
              <Typography
                style={{
                  textDecorationLine:
                    state === "delivered" ? "line-through" : "none",
                }}
              >
                {name}
              </Typography>
            </Box>
            <Box style={{ width: 50 }}>
              <Typography
                style={{
                  textDecorationLine:
                    state === "delivered" ? "line-through" : "none",
                }}
              >
                {count}
              </Typography>
            </Box>
            <Box style={{ width: 50 }}>
              {(state === "preparing" || state === "ready") && (
                <Checkbox
                  checked={state !== "pending" && state !== "preparing"}
                  onChange={() => {
                    handleChange(_id, state);
                  }}
                  color="primary"
                />
              )}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDishReady: (payload) => dispatch(changeDishReady(payload)),
    changeDishPreaping: (payload) => dispatch(changeDishPreaping(payload)),
  };
};

export default connect(null, mapDispatchToProps)(ContentCard);
