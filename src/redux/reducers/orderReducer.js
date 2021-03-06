import {
  FETCH_ORDERS,
  ADD_ORDER,
  CLOSE_ORDER,
  REMOVE_ORDER,
  PAY_ORDER,
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  DISHES_PREPARING_ORDER,
  DISHES_READY_ORDER,
  DISH_DELIVERED,
  DISH_READY,
  DISH_PREPARING,
} from "../actions/orderAction";

// Estado inicial
const initialState = { orders: [] };

export function order(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        orders: action.payload,
      };

    case ADD_ORDER:
      return {
        orders: [action.payload, ...state.orders],
      };

    case CLOSE_ORDER:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload) {
              order.closed = !order.closed;
            }
            return order;
          }),
        ],
      };

    case REMOVE_ORDER:
      return {
        orders: [
          ...state.orders.filter((order) => order._id !== action.payload),
        ],
      };

    case PAY_ORDER:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload) {
              order.paid = !order.paid;
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
              delete action.payload.order_id;
              if (order.dishes === undefined) order.dishes = [];
              order.dishes = [action.payload, ...order.dishes];
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
              order.dishes.forEach((item) => {
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
              order.dishes.forEach((item) => {
                if (item._id === action.payload._id) {
                  item.count -= 1;
                }
              });
            }
            return order;
          }),
        ],
      };

    case DISHES_READY_ORDER:
      console.log(action.payload.dishes);
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              action.payload.dishes.forEach((ele) => {
                order.dishes.forEach((item) => {
                  if (item._id === ele) {
                    item.state = "ready";
                  }
                });
              });
            }
            return order;
          }),
        ],
      };

    case DISHES_PREPARING_ORDER:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              action.payload.dishes.forEach((ele) => {
                order.dishes.forEach((item) => {
                  if (item._id === ele) {
                    item.state = "preparing";
                  }
                });
              });
            }
            return order;
          }),
        ],
      };

    case DISH_DELIVERED:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              order.dishes.forEach((item) => {
                if (item._id === action.payload.dish_id) {
                  item.state = "delivered";
                }
              });
            }
            return order;
          }),
        ],
      };

    case DISH_READY:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              order.dishes.forEach((item) => {
                if (item._id === action.payload.dish_id) {
                  item.state = "ready";
                }
              });
            }
            return order;
          }),
        ],
      };

    case DISH_PREPARING:
      return {
        orders: [
          ...state.orders.map((order) => {
            if (order._id === action.payload.order_id) {
              order.dishes.forEach((item) => {
                if (item._id === action.payload.dish_id) {
                  item.state = "preparing";
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
