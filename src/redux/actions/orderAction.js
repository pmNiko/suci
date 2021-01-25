export const FETCH_ORDERS = "FETCH_ORDERS";
export const ADD_ORDER = "ADD_ORDER";
export const MODIFY_ORDER = "MODIFY_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";

export const fetchOrders = (orders) => {
  return {
    type: FETCH_ORDERS,
    payload: orders,
  };
};

export const addOrder = (payload) => {
  return {
    type: ADD_ORDER,
    payload,
  };
};

export const modifyOrder = (order_id) => {
  return {
    type: MODIFY_ORDER,
    payload: order_id,
  };
};

export const removeOrder = (order_id) => {
  return {
    type: REMOVE_ORDER,
    payload: order_id,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const incrementItem = (item) => {
  return {
    type: INCREMENT_ITEM,
    payload: item,
  };
};

export const decrementItem = (item) => {
  return {
    type: DECREMENT_ITEM,
    payload: item,
  };
};
