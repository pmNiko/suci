import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/themeConfig";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 variant="primary">SUCI</h1>
      <Button variant="text" color="primary">
        Accion primaria
      </Button>
      <Button variant="text" color="secondary">
        Accion secundaria
      </Button>
    </ThemeProvider>
  );
}

export default App;
