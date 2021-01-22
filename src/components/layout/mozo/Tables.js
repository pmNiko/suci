import React from "react";
import Grid from "@material-ui/core/Grid";
import { numberTables } from "../../../utils/database";

import Table from "./Table";

const Tables = () => {
  return (
    <Grid container justify="center">
      {numberTables.map((table, index) => (
        <Table key={index} {...table} />
      ))}
    </Grid>
  );
};

export default Tables;
