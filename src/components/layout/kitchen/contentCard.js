import React from "react";
import { Grid, Typography, Checkbox, Box, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { changeDishReady } from "../../../redux/actions/orderAction";

export const ContentCard = ({ order, changeDishReady }) => {
  let dishes = order[0].dishes;
  let order_id = order[0]._id;
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event, dish_id) => {
    changeDishReady({ order_id, dish_id });
    setChecked(event.target.checked);
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
                  onChange={(event) => {
                    handleChange(event, _id);
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
  };
};

export default connect(null, mapDispatchToProps)(ContentCard);
