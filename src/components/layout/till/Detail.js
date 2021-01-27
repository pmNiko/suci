import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Button } from "@material-ui/core/";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PaymentIcon from "@material-ui/icons/Payment";
import { connect } from "react-redux";
import { pay } from "../../../redux/actions/orderAction";

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function subtotal(items) {
  let subtotal = 0;
  items.map((item) => {
    subtotal += priceRow(item.price, item.count);
  });
  return subtotal;
}

const Detail = ({ order, pay }) => {
  const classes = useStyles();
  const invoiceSubtotal = subtotal(order.dishes);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceSubtotal - invoiceTaxes;

  const checkIn = () => {
    pay(order._id);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={5}>
              FACTURA
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">{order.number}</TableCell>
            <TableCell align="center">Mesa Nº {order.table}</TableCell>
            <TableCell align="right">Fecha: {order.date}</TableCell>
            <TableCell align="right">Hora: {order.time}</TableCell>
            <TableCell align="right" colSpan={3}>
              Precio
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="right">Precio Unitario</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.dishes.map(({ _id, name, count, price }) => (
            <TableRow key={_id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{count}</TableCell>
              <TableCell align="right">{ccyFormat(price)}</TableCell>
              <TableCell align="right">
                {ccyFormat(priceRow(price, count))}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Descuento</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={5}>
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                className={classes.button}
                onClick={() => {
                  checkIn();
                }}
                startIcon={<PaymentIcon />}
                fullWidth
              >
                COBRAR FACTURA
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    pay: (item) => dispatch(pay(item)),
  };
};

export default connect(null, mapDispatchToProps)(Detail);
