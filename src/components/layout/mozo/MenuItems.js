import React from "react";
import { Grid, Typography, Box } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addItem } from "../../../redux/actions/orderAction";

const MenuItems = ({ dishes, add }) => {
  const nC = "60084051febd1d079e8d43bb";
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
              onClick={() => {
                add({ ...item, nC });
              }}
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
