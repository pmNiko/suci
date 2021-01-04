import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Badge,
} from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";

import { items } from "../../utils/database";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  content: {
    marginTop: "10px",
  },
  text: {
    marginLeft: "10%",
  },
});

const Till = () => {
  const classes = useStyles();

  // Simulación de productos comprados
  const purchasedItems = [];
  for (let i = 0; i < 5; i++) {
    purchasedItems.push(items[Math.floor(Math.random() * items.length)]);
  }
  let totalPrice = 0;
  purchasedItems.map((item) => {
    totalPrice = totalPrice + item.price;
  });

  return (
    <>
      <Grid container justify="center" className={classes.content}>
        <Grid item md={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="center">cantidad</TableCell>
                  <TableCell align="center">Precio</TableCell>
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {purchasedItems.map((item) => (
                  <TableRow key={`${item.id}+${item.category}`}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="center">1</TableCell>
                    <TableCell align="center">$ {item.price}</TableCell>
                    <TableCell align="center">$ {item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item md={8}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={purchasedItems.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <Badge color="secondary" variant="dot" className={classes.text}>
            <Typography>$ {totalPrice}</Typography>
          </Badge>
        </Grid>

        <Grid item md={8}>
          <Button variant="contained" color="secondary">
            Facturar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Till;
