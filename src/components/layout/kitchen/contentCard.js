import React from "react";
import { Grid, Typography, Checkbox, Box, Button } from "@material-ui/core";

export const ContentCard = ({ order }) => {
  let dishes = order[0].dishes;
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <Grid container direction="column" alignItems="center">
        {dishes.map(({ name }, index) => (
          <Grid item>
            <Grid
              container
              key={index}
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Typography>{name}</Typography>
              <Checkbox
                checked={index.checked}
                onChange={handleChange}
                color="primary"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" disableElevation>
        Despachar
      </Button>
    </Box>
  );
};

export default ContentCard;
