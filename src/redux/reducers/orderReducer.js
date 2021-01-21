// import { orders } from "../../utils/database";
import {
  FETCH_ORDERS,
  MODIFY_ORDER,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../actions/orderAction";

// Estado inicial
const initialState = { orders: [] };

export function order(state = initialState, action) {
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
            if (order._id === action.payload.order_id) {
              let newItem = action.payload;
              delete newItem.order_id;
              order.dishes = [newItem, ...order.dishes];
            }
            return order;
          }),
        ],
      };

    case REMOVE_ITEM:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              order.dishes = order.dishes.filter(
                (dish) => dish._id !== action.payload._id
              );
            }
            return order;
          }),
        ],
      };

    case INCREMENT_ITEM:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              order.dishes.map((item) => {
                if (item._id === action.payload._id) {
                  item.count += 1;
                }
              });
            }
            return order;
          }),
        ],
      };

    case DECREMENT_ITEM:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              order.dishes.map((item) => {
                if (item._id === action.payload._id) {
                  item.count -= 1;
                }
              });
            }
            return order;
          }),
        ],
      };

    default:
      return state;
  }
}
