import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import store from "./redux/store";

// Instanciamos el cliente de Apollo
const client = new ApolloClient({
  uri: "http://localhost:3600",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
