import React from "react"
import { Grid, Box } from "@material-ui/core/"
import { makeStyles } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import MenuFooter from "./MenuFooter"
import MenuItems from "./MenuItems"

//----- Componente de Menu de Items ---- //

const useStyle = makeStyles(() => ({
	test: {
		background: purple[500],
	},
}))

const Menu = () => {
	const classes = useStyle()
	return (
		<Grid container spacing={1} justify="center">
			{/* header de Menu */}
			<Grid item md={12}>
				<TableContainer>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Menu</TableCell>
								<TableCell>Rapiditas(variable)</TableCell>
							</TableRow>
						</TableHead>
						<TableBody></TableBody>
					</Table>
				</TableContainer>
			</Grid>
			<Grid item md={12}>
				<Box m={2} mb={3}>
					<TableContainer>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Item</TableCell>
									<TableCell>Cantidad</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<MenuItems />
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Grid>
			<Grid item md={12}>
				<Box border={0} m={2} align="center">
					<MenuFooter />
				</Box>
			</Grid>
		</Grid>
	)
}

export default Menu