import { ADD_ITEM } from "../actions/comandaAction";
import { orders } from "../../utils/database";

const initialState = { orders };

export function comandas(state = initialState, action) {
  // console.log(state.orders[2].platos);
  switch (action.type) {
    case ADD_ITEM:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order.id === action.payload.nC) {
              order.platos = [action.payload, ...order.platos];
            }
            return order;
          }),
        ],
      };

    default:
      return state;
  }
}

// array = JSON.parse(localStorage.getItem("cart"));
//   localStorage.setItem("cart", JSON.stringify(newArray));
