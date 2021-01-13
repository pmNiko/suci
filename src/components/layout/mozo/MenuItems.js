import React from "react"
import { Grid, Box } from "@material-ui/core/"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import { items } from "../../../utils/database"

const MenuItems = () => {
	const rapidas = items.filter((item) => item.category === "Rapidas")

	return (
		<Grid item md={12}>
			<TableContainer>
				<Table aria-label="simple table">
					<TableBody>
						{rapidas.map((item) => (
							<TableRow key={`${item.id}+${item.name}`}>
								<TableCell component="th" scope="row">
									{item.name}
								</TableCell>
								<TableCell component="th" scope="row">
									{item.cant}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	)
}

export default MenuItems
