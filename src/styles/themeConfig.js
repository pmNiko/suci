import { createMuiTheme } from "@material-ui/core/styles";
import { red, indigo, green } from "@material-ui/core/colors/";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: red[300],
      main: red[700],
      dark: red[800],
      contrastText: "#fff",
    },
    secondary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[800],
      contrastText: "#fff",
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[800],
      contrastText: "#fff",
    },
  },
});
