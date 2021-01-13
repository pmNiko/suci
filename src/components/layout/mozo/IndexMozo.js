import React from "react"
import { Grid, Box } from "@material-ui/core/"
import Menu from "../mozo/Menu"
import Order from "../mozo/Order"

export default function IndexMozo() {
	return (
		<Grid container spacing={1} justify="center">
			{/* header de Menu */}
			<Grid item md={6}>
				<Box border={1} m={3} align="center">
					<Menu />
				</Box>
			</Grid>
			<Grid item md={6}>
				<Box border={1} m={3} align="center">
					<Order />
				</Box>
			</Grid>
		</Grid>
	)
}
