import React from "react";
import { Grid, Box, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import MenuFooter from "./MenuFooter";
import MenuItems from "./MenuItems";
import Divider from "@material-ui/core/Divider";

//----- Componente de Menu de Items ---- //

const useStyle = makeStyles(() => ({
  test: {
    background: purple[500],
  },
}));

const Menu = () => {
  const classes = useStyle();
  return (
    <Grid container md={12}>
      <Grid item md={12}>
        <Box m={3}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Typography>Menu </Typography>
            <Typography>Rapidas</Typography>
          </Grid>
        </Box>
        <Divider />
      </Grid>
      <Grid item md={12}>
        <Box m={3}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Typography>Item </Typography>
            <Typography>Cantidad</Typography>
          </Grid>
        </Box>
        <MenuItems />
      </Grid>
      <Grid item md={12}>
        <Box border={0} m={2} align="center">
          <MenuFooter />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Menu;
