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
			<Link>Enviar a cocina</Link>
			<Link>Cerrar cuenta</Link>
		</Breadcrumbs>
	)
}

export default MenuFooter
