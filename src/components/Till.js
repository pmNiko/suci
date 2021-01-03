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
  Box,
} from "@material-ui/core/";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Till = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center">
      <Box m={-1} border={1}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">cantidad</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Pizza Napolitana
                </TableCell>
                <TableCell align="right">1/2</TableCell>
                <TableCell align="right">$ 500</TableCell>
                <TableCell align="right">$ 250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Empanadas
                </TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">$ 800</TableCell>
                <TableCell align="right">$ 800</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Cerveza
                </TableCell>
                <TableCell align="right">4</TableCell>
                <TableCell align="right">$ 250</TableCell>
                <TableCell align="right">$ 1000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default Till;
