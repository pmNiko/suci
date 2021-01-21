import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/themeConfig";
import { Navbar } from "./components/common/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// consulta a la  API Graphql
import { useQuery } from "@apollo/react-hooks";
import { GET_ORDERS } from "./services/Queries";
import { connect } from "react-redux";
import { fetchOrders } from "./redux/actions/orderAction";

// lazy es una función y Suspense es un componente
import React, { lazy, Suspense, useEffect } from "react";
/*  React carga los componentes de manera sincronica, 
    lazy load hace que los componentes se carguen de manera
    diferida a medida que los vayamos requiriendo. Lazy busca 
    el componente y Suspense lo inyecta al DOM */
const Menu = lazy(() => import("./components/layout/mozo/IndexMozo"));
const Kitchen = lazy(() => import("./components/pages/kitchen"));
const Till = lazy(() => import("./components/layout/till/Till"));

function App({ fetchOrders }) {
  // consulta a partir del hook de apollo
  const { loading, error, data } = useQuery(GET_ORDERS);

  // loading || console.log("App: ", data.orders);
  useEffect(() => {
    loading || fetchOrders(data.orders);
  }, [loading]);
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

            <Route path="/" exact component={Menu} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/till" exact component={Till} />
            <Route path="/kitchen" exact component={Kitchen} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: (payload) => dispatch(fetchOrders(payload)),
  };
};

export default connect(null, mapDispatchToProps)(App);
