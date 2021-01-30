import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core/";
import { connect } from "react-redux";
import { fetchTables } from "../../../redux/actions/tableAction";
// consulta a la  API Graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_TABLES } from "../../../services/Queries";

import Table from "./Table";

/*
  Componente encargado de mostrar las mesas
*/
const Tables = ({ fetchTables, tables }) => {
  const { loading, error, data } = useQuery(GET_TABLES);

  useEffect(() => {
    if (data) {
      fetchTables(data.tables);
    }
    console.log("Data tables: ", data);
    console.log("loading tables: ", loading);
    console.log("error tables: ", error);
  }, [data]);

  return (
    <Grid container justify="center">
      {tables !== undefined &&
        tables.map((table, index) => <Table key={index} {...table} />)}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    tables: state.table.tables,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTables: (payload) => dispatch(fetchTables(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
