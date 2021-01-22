import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { numberTables } from "../../../utils/database";
import { Link } from "react-router-dom";

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
const Tables = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      {numberTables.map(({ color, numero }, index) => (
        <Link to="/menu" style={{ textDecoration: "none" }}>
          <Grid Item>
            <Card className={classes.root} style={{ backgroundColor: color }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  N° Mesa: {numero}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Tables;
