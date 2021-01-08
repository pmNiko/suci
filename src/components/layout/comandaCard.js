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
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ComandaCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function showContent() {}

  const listaComanda = [
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 1 },
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 2 },
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 3 },
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 4 },
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 5 },
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 6 },
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 7 },
    { fecha: "12/05/2020", numeroComanda: 2, mesa: 10, id: 8 },
  ];

  return (
    <Grid container justify="center">
      {/* //   {listaComanda.map(comandaCard)} */}
      {listaComanda.map(({ fecha, mesa, id, numeroComanda }, index) => (
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
                N° Comanda: {numeroComanda}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                N° Mesa: {mesa}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleOpen}>
                Ver
              </Button>
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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}
