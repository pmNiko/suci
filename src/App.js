import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "./styles/themeConfig"
import Button from "@material-ui/core/Button"
import {Navbar} from "./components/layout/navbar"
import KitchenModule from "./components/pages/kitchen"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
     <KitchenModule/>
    </ThemeProvider>
  );
}

export default App;
