import React from "react";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";

const MenuFooter = () => {
  return (
    <Breadcrumbs>
      <Link>Rapidas</Link>
      <Link>Platos</Link>
      <Link>Ensaladas</Link>
      <Link>Postres</Link>
      <Link>Refrescos</Link>
      <Link>Bebibles</Link>
    </Breadcrumbs>
  );
};

export default MenuFooter;
