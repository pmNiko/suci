/*  Para crear el store siempre se hace a través 
    de reducers, nunca a través de acciones. */
import { combineReducers } from "redux";
import { order } from "./orderReducer";

// aca se iran añadiendo todos los reducers
export default combineReducers({
  order,
});
