import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { connect } from "react-redux";
import { addOrder } from "../../../redux/actions/orderAction";
import { modifyTable } from "../../../redux/actions/tableAction";
// consulta a la  API Graphql
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ORDER } from "../../../services/Mutations";

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

/*
  Componente de mesa
*/
const Table = ({ color, number, free, order, addOrder, modifyTable }) => {
  let order_id_param = order;
  const classes = useStyles();

  // instaciamos la mutación que vamos a utilizar
  const [createOrder] = useMutation(CREATE_ORDER);
  // usamos history para redireccionar al usuario
  const history = useHistory();

  const send = async () => {
    if (free) {
      await createOrder({
        variables: {
          table: number,
        },
      })
        .then((result) => {
          let order = result.data.createOrder;
          order_id_param = order._id;
          addOrder(order);
          modifyTable({ number, order_id_param });
          history.push(`/mozo/${order_id_param}`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      history.push(`/mozo/${order_id_param}`);
    }
  };

  /*
    Render de la vista de la mesa
  */
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

const mapDispatchToProps = (dispatch) => {
  return {
    addOrder: (payload) => dispatch(addOrder(payload)),
    modifyTable: (payload) => dispatch(modifyTable(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Table);
