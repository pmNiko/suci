import React from "react";
import { Grid, Typography, Checkbox, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const ContentCard = () => {
  const [checked, setChecked] = React.useState(false);

    const platosComanda= [
    {nombre:'Comida Prueba'},
    {nombre:'Comida Prueba'},
    {nombre:'Comida Prueba'},
    {nombre:'Comida Prueba'},
    {nombre:'Comida Prueba'},
    {nombre:'Comida Prueba'},
    {nombre:'Comida Prueba'},
    {nombre:'Comida Prueba'},
];

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
      <Box>
    <Grid container direction="column" alignItems="center">
    {platosComanda.map(({nombre}, index) =><Grid item>
      <Grid container direction="row" alignItems="center" justify="space-between">
        <Grid item>
          <Typography>{nombre}</Typography>
        </Grid>
        <Grid item>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
      </Grid>
      </Grid>)}
    </Grid>
    <Button variant="contained" color="primary" disableElevation>
  Despachar
</Button>
    </Box>
  );
};

export default ContentCard;
