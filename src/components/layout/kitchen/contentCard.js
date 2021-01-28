import React from "react";
import { Grid, Typography, Checkbox, Box, Button } from "@material-ui/core";
import { connect } from "react-redux";
import {
  changeDishReady,
  changeDishPreaping,
} from "../../../redux/actions/orderAction";

export const ContentCard = ({ order, changeDishReady, changeDishPreaping }) => {
  let dishes = order[0].dishes;
  let order_id = order[0]._id;

  const handleChange = (dish_id, state) => {
    if (state === "preparing") {
      changeDishReady({ order_id, dish_id });
    } else {
      changeDishPreaping({ order_id, dish_id });
    }
  };
  return (
    <Box>
      <Grid container direction="column" alignItems="center">
        {dishes.map(({ _id, name, state }, index) => (
          <Grid item>
            <Grid
              container
              key={index}
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Typography>{name}</Typography>
              {(state === "preparing" || state === "ready") && (
                <Checkbox
                  checked={state !== "pending" && state !== "preparing"}
                  onChange={() => {
                    handleChange(_id, state);
                  }}
                  color="primary"
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" disableElevation>
        Despachar
      </Button>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDishReady: (payload) => dispatch(changeDishReady(payload)),
    changeDishPreaping: (payload) => dispatch(changeDishPreaping(payload)),
  };
};

export default connect(null, mapDispatchToProps)(ContentCard);
