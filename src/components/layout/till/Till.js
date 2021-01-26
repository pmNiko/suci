import React from "react";
import { Grid, Box } from "@material-ui/core/";
import Tickets from "./Tickets";
import Detail from "./Detail";

const Till = () => {
  return (
    <>
      <Grid container>
        <Grid item md={5}>
          <Box m={3} marginTop={8}>
            <Tickets />
          </Box>
        </Grid>
        <Grid item md={7}>
          <Box m={3} marginTop={8}>
            <Detail />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Till;
