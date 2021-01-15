/*  Para crear el store siempre se hace a través 
    de reducers, nunca a través de acciones. */
import { combineReducers } from "redux";
import palabra from "./postReducer";
import { order } from "./orderReducer";
import { comandas } from "./comandaReducer";

// aca se iran añadiendo todos los reducers
export default combineReducers({
  order,
});
