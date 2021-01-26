import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

/*
  Componente para las acciones generales de la comanda
*/
const MenuFooter = ({
  sendKitchen,
  bill,
  desability_send_kitchen,
  desability_bill,
}) => {
  const classes = useStyles();
  return (
    <Grid container md={12}>
      <Grid item spacing={1} md={6}>
        <Box border={0} m={2} align="center">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.button}
            disabled={desability_bill}
            onClick={() => {
              bill();
            }}
            startIcon={<ReceiptIcon />}
          >
            Facturar
          </Button>
        </Box>
      </Grid>
      <Grid item spacing={1} md={6}>
        <Box border={0} m={2} align="center">
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            className={classes.button}
            disabled={desability_send_kitchen}
            onClick={() => {
              sendKitchen();
            }}
            startIcon={<SendIcon />}
          >
            Ordenar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MenuFooter;
