import React from "react";
import { connect } from "react-redux";
import {Grid,Button} from "@material-ui/core"

const Componente1 = ({ palabra }) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return {
    palabra: state.palabra,
  };
};

export default connect(mapStateToProps)(Componente1);
