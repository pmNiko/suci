import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core/";
import Tickets from "./Tickets";
import Detail from "./Detail";
import { connect } from "react-redux";

const Till = ({ orders }) => {
  const [detail, setDetail] = useState("");
  let order = [];
  order = orders[0];

  useEffect(() => {
    order = orders.filter((order) => order._id === detail);
  }, [detail]);
  return (
    <>
      <Grid container>
        <Grid item md={5}>
          <Box m={3} marginTop={8}>
            <Tickets orders={orders} />
          </Box>
        </Grid>
        <Grid item md={7}>
          <Box m={3} marginTop={8}>
            <Detail order={order} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps)(Till);
