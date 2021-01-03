import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/themeConfig";
import { Navbar } from "./components/layout/navbar";
import Till from "./components/layout/Till";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Till />
    </ThemeProvider>
  );
}

export default App;
