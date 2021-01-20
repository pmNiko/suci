import React, { useState, useEffect } from "react";
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
import { Filter } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 800,
  },
});

// const useStyles = makeStyles({
//   fontSize: {
//     fontSize: "13px",
//   },
// });

const MenuFooter = () => {
  const classes = useStyles();
  const [value, setValue] = useState("Rapidas");

  const filter = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={filter}
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
        label="Bebibles"
        value="Bebibles"
        icon={<FreeBreakfastIcon />}
      />
      <BottomNavigationAction
        label="Postres"
        value="Postres"
        icon={<MoodIcon />}
      />
    </BottomNavigation>
    // <Breadcrumbs className={classes.fontSize}>
    // 	<Link>Rapidas</Link>
    // 	<Link>Platos</Link>
    // 	<Link>Ensaladas</Link>
    // 	<Link>Postres</Link>
    // 	<Link>Refrescos</Link>
    // 	<Link>Bebibles</Link>
    // </Breadcrumbs>
  );
};

export default MenuFooter;
