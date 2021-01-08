import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Logo from "./../../images/suci_logo.png";
import { links } from "../../utils/links";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Avatar alt="Suci" src={Logo} />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            SUCI
          </Typography>

          {links.map(({ id, path, title }) => (
            <NavLink
              key={id}
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "20px",
              }}
              to={path}
              exact
              activeStyle={{ color: "white" }}
            >
              {title}
            </NavLink>
          ))}

          <Button color="inherit" style={{ marginLeft: "50px" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
