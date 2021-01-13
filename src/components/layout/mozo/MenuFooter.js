import React from "react"
import { Typography, Breadcrumbs, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	fontSize: {
		fontSize: "13px",
	},
})

const MenuFooter = () => {
	const classes = useStyles()
	return (
		<Breadcrumbs className={classes.fontSize}>
			<Link>Rapidas</Link>
			<Link>Platos</Link>
			<Link>Ensaladas</Link>
			<Link>Postres</Link>
			<Link>Refrescos</Link>
			<Link>Bebibles</Link>
		</Breadcrumbs>
	)
}

export default MenuFooter
