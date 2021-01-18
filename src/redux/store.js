import { createStore } from "redux";
/*  lo nombro rootReducers al combineReducers
    que exporto desde reducers/index.js */
// import rootReducers from "./reducers";
import { order } from "./reducers/orderReducer";

const store = createStore(order);

export default store;
