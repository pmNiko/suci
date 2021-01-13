import { orders } from "../../utils/database";
import { MODIFY_ORDER } from "../actions/orderAction";

// Estado inicial
const initialState = { orders };

export function order(state = initialState, action) {
  switch (action.type) {
    case MODIFY_ORDER:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order.id === action.payload) {
              order.pendiente = !order.pendiente;
            }
            return order;
          }),
        ],
      };

    default:
      return state;
  }
}
