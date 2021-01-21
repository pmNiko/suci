// import { orders } from "../../utils/database";
import { FETCH_ORDERS, MODIFY_ORDER, ADD_ITEM } from "../actions/orderAction";

// Estado inicial
const initialState = { orders: [] };

export function order(state = initialState, action) {
  // console.log("Action payload: ", action.payload);
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        orders: action.payload,
      };

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
            if (order._id === action.payload.nC) {
              let newItem = action.payload;
              delete newItem.nC;
              newItem.delivered = false;
              console.log(newItem);
              order.dishes = [newItem, ...order.dishes];
            }
            return order;
          }),
        ],
      };

    default:
      return state;
  }
}
