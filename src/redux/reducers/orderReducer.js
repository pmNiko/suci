import { orders } from "../../utils/database";
import { MODIFY_ORDER, ADD_ITEM } from "../actions/orderAction";

// Estado inicial
const initialState = { orders };

export function order(state = initialState, action) {
  console.log(state.orders[2]);
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

    case ADD_ITEM:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order.id === action.payload.nC) {
              let newOrder = action.payload;
              newOrder.despachado = false;
              order.dishes = [newOrder, ...order.dishes];
            }
            return order;
          }),
        ],
      };

    default:
      return state;
  }
}
