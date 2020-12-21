import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 275,
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ComandaCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function showContent (){};

  return (
    <Card className={classes.root} onClick={showContent}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          12/12/2020
        </Typography>
        <Typography variant="h5" component="h2">
          COMANDA N°1
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Mesa : 10
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver</Button>
      </CardActions>
    </Card>
  );
}
