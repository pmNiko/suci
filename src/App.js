import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "./styles/themeConfig"
import Button from "@material-ui/core/Button"
import {Navbar} from "./components/layout/navbar"
import KitchenPage from "./components/pages/kitchen"
import ComandaCard from "./components/layout/comandaCard"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <ComandaCard/>
    </ThemeProvider>
  );
}

export default App;
