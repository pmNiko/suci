export const MODIFY_ORDER = "MODIFY_ORDER";
export const ADD_ITEM = "ADD_ITEM";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const modifyOrder = (order_id) => {
  return {
    type: MODIFY_ORDER,
    payload: order_id,
  };
};
