import React from "react";
import { Grid, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import MenuItems from "./MenuItems";
import MenuFooter from "./MenuFooter";

//----- Componente de Menu de Items ---- //

const useStyle = makeStyles(() => ({
  test: {
    background: purple[500],
  },
}));

const Menu = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={1} justify="center">
      {/* header de Menu */}
      <Grid item md={12}>
        <Box border={1} m={3} align="center">
          <h4>Menu Rapidas</h4>
        </Box>
      </Grid>
      {/* descripción de items */}
      <Grid item md={12}>
        <Box border={1} m={3} align="center">
          <h4>Items Cantidad</h4>
        </Box>
      </Grid>
      {/* body de items */}
      <Grid item md={12}>
        <MenuItems />
      </Grid>
      {/* Footer de Menu */}
      <MenuFooter />
    </Grid>
  );
};

export default Menu;
