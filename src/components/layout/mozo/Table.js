import React from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

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
  const history = useHistory();
  const send = () => {
    if (free) {
      alert("Necesita crear comanda");
    } else {
      history.push(`/mozo/${order_id_param}`);
    }
  };
  return (
    <Box marginTop={10}>
      <Grid Item>
        <Card className={classes.root} style={{ backgroundColor: `${color}` }}>
          <Box mb={3}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Mesa {number}
              </Typography>
              <Typography variant="h5" component="h2">
                {free ? "Libre" : "Ocupada"}
              </Typography>
            </CardContent>
            {/* <Link to={`/mozo/${order_id_param}`} style={{ textDecoration: "none" }}></Link> */}
          </Box>
          <Button
            variant="contained"
            size="small"
            color="ineriht"
            className={classes.button}
            startIcon={<SendIcon />}
            onClick={send}
          >
            {free ? "ATENDER" : "VER"}
          </Button>
        </Card>
      </Grid>
    </Box>
  );
};

export default Table;
