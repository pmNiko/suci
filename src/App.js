import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/themeConfig";
import { Navbar } from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// lazy es una función y Suspense es un componente
import React, { lazy, Suspense } from "react";
/*  React carga los componentes de manera sincronica, 
    lazy load hace que los componentes se carguen de manera
    diferida a medida que los vayamos requiriendo. Lazy busca 
    el componente y Suspense lo inyecta al DOM */
const Menu = lazy(() => import("./components/layout/mozo/Menu"));
const Kitchen = lazy(() => import("./components/pages/kitchen"));
const Till = lazy(() => import("./components/layout/Till"));
const Floor = lazy(() => import("./components/pages/floor"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* El BrowserRouter es quien maneja el routing y este va en el 
        nivel mas alto de la app */}
      <Router>
        <Navbar />
        {/* Inyecta el componente en el dom */}
        <Suspense fallback={"Cargando..."}>
          {/* El Switch sirve para renderizar la primer coincidencia */}
          <Switch>
            {/* Route se encarga de sentenciar las rutas con las cuales
            renderear los componentes y la variante exact matchea la ruta exacta*/}
            <Provider store={store}>
              <Route path="/" exact component={Menu} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/kitchen" exact component={Kitchen} />
              <Route path="/till" exact component={Till} />
              <Route path="/floor" exact component={Floor} />
            </Provider>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
