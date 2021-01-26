import React, { useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import MenuFooter from "./MenuFooter";
import MenuItems from "./MenuItems";
import Divider from "@material-ui/core/Divider";
// consulta a la  API Graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_DISHES } from "../../../services/Queries";

const useStyle = makeStyles(() => ({
  test: {
    background: purple[500],
  },
}));

//----- Componente de Menu ------ //
const Menu = () => {
  // stado para el manejo de category
  const [category, setCategory] = useState("Rapidas");

  // consulta a partir del hook de apollo
  const { loading, error, data } = useQuery(GET_DISHES);
  let dishes = [];
  if (!loading) {
    dishes = data.dishes.filter((item) => item.category === `${category}`);
  }

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
            <Typography>{category}</Typography>
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
            <Typography>Acción</Typography>
          </Grid>
        </Box>
        {!loading && <MenuItems dishes={dishes} />}
      </Grid>
      <Grid item md={12}>
        <Box border={0} m={2} align="center">
          <MenuFooter setCategory={setCategory} category={category} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Menu;
