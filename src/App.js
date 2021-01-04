import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/themeConfig";
import Till from "./components/layout/Till";
import { Navbar } from "./components/layout/navbar";
import KitchenModule from "./components/pages/kitchen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <Till /> */}
      <KitchenModule />
    </ThemeProvider>
  );
}

export default App;
