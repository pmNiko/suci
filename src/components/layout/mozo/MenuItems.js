import React from "react";
import { Grid, Typography, Box } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { items } from "../../../utils/database";
import { connect } from "react-redux";
import { addItem } from "../../../redux/actions/orderAction";
// consulta a la  API Graphql
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_DISHES = gql`
  {
    dishes {
      _id
      name
      price
      category
    }
  }
`;

const MenuItems = ({ add }) => {
  // consulta a partir del hook de apollo
  const { loading, error, data } = useQuery(GET_DISHES);
  let rapidas = [];
  if (!loading) {
    rapidas = data.dishes.filter((item) => item.category === "Rapidas");
  }

  const nC = 3;
  return (
    <>
      {loading ? (
        "Cargando..."
      ) : (
        <Grid item md={12}>
          {rapidas.map((item) => (
            <Box m={3}>
              <Grid
                container
                key={item._id}
                direction="row"
                alignItems="center"
                justify="space-between"
              >
                <Typography>{item.name}</Typography>
                <Typography>{item.price}</Typography>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => {
                    add({ ...item, nC });
                  }}
                >
                  Agregar
                </Button>
              </Grid>
            </Box>
          ))}
        </Grid>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(MenuItems);
