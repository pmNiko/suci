export const MODIFY_ORDER = "MODIFY_ORDER";

export const modifyOrder = (order_id) => {
  return {
    type: MODIFY_ORDER,
    payload: order_id,
  };
};
