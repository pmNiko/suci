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
import OrderFooter from "./OrderFooter"

//----- Componente de Menu de Items ---- //

const useStyle = makeStyles(() => ({
	test: {
		background: purple[500],
	},
}))

const Order = () => {
	const classes = useStyle()
	return (
		<div>
			<Grid container spacing={1} justify="center">
				{/* header de Menu */}
				<Grid item md={12}>
					<TableContainer>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Comanda</TableCell>
									<TableCell>Mesa:</TableCell>
									<TableCell>Mozo:</TableCell>
									<TableCell>Hora:</TableCell>
								</TableRow>
							</TableHead>
							<TableBody></TableBody>
						</Table>
					</TableContainer>
				</Grid>
				{/* descripción de items */}
				<Grid item md={12}>
					<Box m={2} mb={3}>
						<TableContainer>
							<Table aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Plato</TableCell>
										<TableCell>Cantidad</TableCell>
										<TableCell>Estado</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow key={1}>
										<TableCell component="th" scope="row">
											{"Milanesa"}
										</TableCell>
										<TableCell component="th" scope="row">
											{"2"}
										</TableCell>
										<TableCell component="th" scope="row">
											{"cocina"}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</Box>
				</Grid>
				<Grid item md={12}>
					<Box border={0} m={2} align="center">
						<OrderFooter />
					</Box>
				</Grid>
			</Grid>
		</div>
	)
}

export default Order
