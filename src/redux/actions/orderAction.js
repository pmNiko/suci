export const FETCH_ORDERS = "FETCH_ORDERS";
export const ADD_ORDER = "ADD_ORDER";
export const CLOSE_ORDER = "CLOSE_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";
export const DISHES_PREPARING_ORDER = "DISHES_PREPARING_ORDER";
export const DISHES_READY_ORDER = "DISHES_READY_ORDER";
export const DISH_DELIVERED = "DISH_DELIVERED";
export const DISH_READY = "DISH_READY";

// Consume desde la API las comandas
export const fetchOrders = (orders) => {
  return {
    type: FETCH_ORDERS,
    payload: orders,
  };
};

// Agrega una comanda al store
export const addOrder = (payload) => {
  return {
    type: ADD_ORDER,
    payload,
  };
};

// Cierra una comanda
export const billOrder = (payload) => {
  return {
    type: CLOSE_ORDER,
    payload,
  };
};

// Elimina una comanda
export const removeOrder = (order_id) => {
  return {
    type: REMOVE_ORDER,
    payload: order_id,
  };
};

// Agrega un item a una comanda
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

// Elimina un item a una comanda
export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

// Incrementa un item en una comanda
export const incrementItem = (item) => {
  return {
    type: INCREMENT_ITEM,
    payload: item,
  };
};

// Decrementa un item en una comanda
export const decrementItem = (item) => {
  return {
    type: DECREMENT_ITEM,
    payload: item,
  };
};

// Cambia el estado de los platos que se envian a cocina
export const dishesPreparingToOrder = (payload) => {
  return {
    type: DISHES_PREPARING_ORDER,
    payload,
  };
};

// Cambia el estado de los platos que estan listos
export const dishesReadyToOrder = (payload) => {
  return {
    type: DISHES_READY_ORDER,
    payload,
  };
};

// Cambia el estado de un item entregado
export const changeDishDelivered = (payload) => {
  return {
    type: DISH_DELIVERED,
    payload,
  };
};

// Cambia el estado de un item que esta listo
export const changeDishReady = (payload) => {
  return {
    type: DISH_READY,
    payload,
  };
};
