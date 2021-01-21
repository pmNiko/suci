export const FETCH_ORDERS = "FETCH_ORDERS";
export const MODIFY_ORDER = "MODIFY_ORDER";
export const ADD_ITEM = "ADD_ITEM";

export const fetchOrders = (orders) => {
  // console.log("Action: ", orders);
  return {
    type: FETCH_ORDERS,
    payload: orders,
  };
};

export const modifyOrder = (order_id) => {
  return {
    type: MODIFY_ORDER,
    payload: order_id,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
