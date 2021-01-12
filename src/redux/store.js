import { createStore } from "redux";
import palabra from './reducers/postReducer';


const store = createStore(palabra);
export default store;