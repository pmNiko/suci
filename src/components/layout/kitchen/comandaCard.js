import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ContentCard from "./contentCard";
import { connect } from "react-redux";
import { billOrder } from "../../../redux/actions/orderAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 15.0,
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  rowContainer: {
    direction: "row",
    alignItems: "center",
    justify: "space-between",
  },
  semaforo: {
    fontSize: 12,
    color: "red",
  },
}));

const ComandaCard = ({ orders }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [idOrder, setIdOrder] = useState("");

  let order = orders[0];
  if (idOrder !== undefined && idOrder !== "") {
    order = orders.filter((order) => order._id === idOrder);
  }
  const handleOpen = (order_id) => {
    setIdOrder(order_id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify="center">
      {orders !== undefined &&
        orders.map(({ date, time, table, _id, number, closed }, index) => (
          <Grid item key={_id}>
            <Card
              className={classes.root}
              onClick={() => {
                handleOpen(_id);
              }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Fecha : {date} {" - "} hora {time}
                </Typography>
                <Typography variant="h6" component="h2">
                  Comanda: {number}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Mesa: {table}
                </Typography>
                <Avatar
                  style={{
                    width: 20,
                    height: 20,
                    color: "red",
                    backgroundColor: "black",
                  }}
                >
                  3
                </Avatar>
              </CardContent>
              <CardActions>
                <Grid container className={classes.rowContainer}>
                  <Typography className={classes.semaforo}>
                    Cerrada: {closed.toString()}
                  </Typography>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ContentCard order={order} />
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // modify recibe el payload
    close: (payload) => dispatch(billOrder(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComandaCard);
