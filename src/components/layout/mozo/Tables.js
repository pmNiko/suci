import React from "react";
import { Grid, Box } from "@material-ui/core/";
// consulta a la  API Graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_TABLES } from "../../../services/Queries";

import Table from "./Table";

const Tables = () => {
  // consulta a partir del hook de apollo
  const { loading, error, data } = useQuery(GET_TABLES);

  return (
    <Grid container justify="center">
      {loading ||
        data.tables.map((table, index) => <Table key={index} {...table} />)}
    </Grid>
  );
};

export default Tables;
