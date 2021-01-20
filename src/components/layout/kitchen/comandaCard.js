import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ContentCard from "./contentCard";
import { connect } from "react-redux";
import { modifyOrder } from "../../../redux/actions/orderAction";

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

const ComandaCard = ({ orders, modify }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify="center">
      {/* //   {listaComanda.map(comandaCard)} */}
      {orders.map(({ fecha, mesa, id, numero, pendiente }, index) => (
        <Grid item key={index}>
          <Card className={classes.root} onClick={handleOpen}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Fecha : {fecha}
              </Typography>
              <Typography variant="h5" component="h2">
                N° Comanda: {numero}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                N° Mesa: {mesa}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container className={classes.rowContainer}>
                <Button
                  size="small"
                  onClick={() => {
                    modify(id);
                  }}
                >
                  Ver
                </Button>
                <Typography className={classes.semaforo}>
                  Pendiente: {pendiente.toString()}
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
            <ContentCard />
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // modify recibe el payload
    modify: (payload) => dispatch(modifyOrder(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComandaCard);
