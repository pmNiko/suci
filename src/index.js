import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// Instanciamos el cliente de Apollo
const client = new ApolloClient({
  uri: "http://localhost:3600",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
