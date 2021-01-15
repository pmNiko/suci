import React from "react";
import { Grid, Typography, Box } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

import { items } from "../../../utils/database";
import { connect } from "react-redux";
import { addItem } from "../../../redux/actions/comandaAction";

const MenuItems = ({ add }) => {
  const rapidas = items.filter((item) => item.category === "Rapidas");
  const nC = 3;
  return (
    <Grid item md={12}>
      {rapidas.map((item) => (
        <Box m={3}>
          <Grid
            container
            key={item.id}
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Typography>{item.name}</Typography>
            <Typography>{item.count}</Typography>
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
