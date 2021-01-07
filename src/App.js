import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/themeConfig";
import ComandaCard from "./components/layout/comandaCard";
import Menu from "./components/layout/mozo/Menu";
import Till from "./components/layout/Till";
import { Navbar } from "./components/layout/navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <ComandaCard/> */}
      <Menu />
      {/* <Till /> */}
      <KitchenModule />
    </ThemeProvider>
  );
}

export default App;
