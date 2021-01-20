import React, { useState } from "react";
// import { Typography, Breadcrumbs, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Forward10SharpIcon from "@material-ui/icons/Forward10Sharp";
import RestaurantSharpIcon from "@material-ui/icons/RestaurantSharp";
import LocalDiningSharpIcon from "@material-ui/icons/LocalDiningSharp";
import MoodIcon from "@material-ui/icons/Mood";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

const useStyles = makeStyles({
  root: {
    width: 800,
  },
});

// El componente recibe el setter y guetter de filtro
const MenuFooter = ({ setCategory, category }) => {
  const classes = useStyles();

  const filterDish = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <BottomNavigation
      value={category}
      onChange={filterDish}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Rapidas"
        value="Rapidas"
        icon={<Forward10SharpIcon />}
      />
      <BottomNavigationAction
        label="Platos"
        value="Platos"
        icon={<RestaurantSharpIcon />}
      />
      <BottomNavigationAction
        label="Ensaladas"
        value="Ensaladas"
        icon={<LocalDiningSharpIcon />}
      />
      <BottomNavigationAction
        label="Refrescos"
        value="Refrescos"
        icon={<LocalDrinkIcon />}
      />
      <BottomNavigationAction
        label="Cafeteria"
        value="Cafeteria"
        icon={<FreeBreakfastIcon />}
      />
      <BottomNavigationAction
        label="Postres"
        value="Postres"
        icon={<MoodIcon />}
      />
    </BottomNavigation>
  );
};

export default MenuFooter;

// const useStyles = makeStyles({
//   fontSize: {
//     fontSize: "13px",
//   },
// });

// <Breadcrumbs className={classes.fontSize}>
// 	<Link>Rapidas</Link>
// 	<Link>Platos</Link>
// 	<Link>Ensaladas</Link>
// 	<Link>Postres</Link>
// 	<Link>Refrescos</Link>
// 	<Link>Bebibles</Link>
// </Breadcrumbs>
