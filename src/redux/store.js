import { createStore } from "redux";
/*  lo nombro rootReducers al combineReducers
    que exporto desde reducers/index.js */
import rootReducers from "./reducers";

const store = createStore(rootReducers);
export default store;
