import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    margin: 10,
    height: 180,
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

const Table = ({ color, number, free, order }) => {
  const order_id_param = order;
  const classes = useStyles();
  return (
    <Link to={`/mozo/${order_id_param}`} style={{ textDecoration: "none" }}>
      <Grid Item>
        <Card className={classes.root} style={{ backgroundColor: `${color}` }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              N° Mesa: {number}
            </Typography>
            <Typography variant="h5" component="h2">
              Libre: {free.toString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Link>
  );
};

export default Table;
