import { gql } from "apollo-boost";

/*
  Mutation para crear una comanda
*/
export const CREATE_ORDER = gql`
  # definición de la mutación
  mutation CreateOrder($table: Int!) {
    # ejecución de la mutación
    createOrder(table: $table) {
      _id
      number
      date
      time
      table
      closed
    }
  }
`;

/*
  Mutation para agregar un item a una comanda
*/
export const ADD_ITEM = gql`
  # definición de la mutación
  mutation AddDishToOrder($order_id: ID!, $dish_id: ID!) {
    # ejecución de la mutación
    addDishToOrder(order_id: $order_id, dish_id: $dish_id) {
      dishes {
        _id
        name
        price
        category
        count
        state
      }
    }
  }
`;

/*
  Mutation para eliminar un item a una comanda
*/
export const REMOVE_ITEM = gql`
  # definición de la mutación
  mutation PopDishToOrder($order_id: ID!, $dish_id: ID!) {
    # ejecución de la mutación
    popDishToOrder(order_id: $order_id, dish_id: $dish_id) {
      dishes {
        _id
      }
    }
  }
`;

/*
  Mutation para incrementar la cantidad de un item a una comanda
*/
export const INCREMENT_ITEM = gql`
  # definición de la mutación
  mutation IncrementDishToOrder($order_id: ID!, $dish_id: ID!) {
    # ejecución de la mutación
    incrementDishToOrder(order_id: $order_id, dish_id: $dish_id) {
      dishes {
        _id
        count
      }
    }
  }
`;

/*
  Mutation para decrementar la cantidad de un item a una comanda
*/
export const DECREMENT_ITEM = gql`
  # definición de la mutación
  mutation IncrementDishToOrder($order_id: ID!, $dish_id: ID!) {
    # ejecución de la mutación
    decrementDishToOrder(order_id: $order_id, dish_id: $dish_id) {
      dishes {
        _id
        count
      }
    }
  }
`;

/*
  Mutation para eliminar una comanda
*/
export const REMOVE_ORDER = gql`
  # definición de la mutación
  mutation DeleteOrder($order_id: ID!) {
    # ejecución de la mutación
    deleteOrder(order_id: $order_id) {
      _id
      table
    }
  }
`;

/*
  Mutation para cerrar una comanda
*/
export const CLOSE_ORDER = gql`
  # definición de la mutación
  mutation CloseOrder($order_id: ID!) {
    # ejecución de la mutación
    closeOrder(order_id: $order_id) {
      _id
      table
    }
  }
`;

/*
  Mutation para pagar una comanda
*/
export const PAY_ORDER = gql`
  # definición de la mutación
  mutation PayOrder($order_id: ID!) {
    # ejecución de la mutación
    payOrder(order_id: $order_id) {
      _id
      paid
    }
  }
`;

/*
  Mutation para enviar a cocina los items pendientes de una comanda
*/
export const DISHES_PREPARING = gql`
  # definición de la mutación
  mutation DishPreparingToOrder($order_id: ID!, $dishes: [ID]) {
    # ejecución de la mutación
    dishPreparingToOrder(order_id: $order_id, dishes: $dishes) {
      dishes {
        _id
      }
    }
  }
`;

/*
  Mutation para cambiar el estado de los platos que estan listos
*/
export const DISHES_READY = gql`
  # definición de la mutación
  mutation DishReadyToOrder($order_id: ID!, $dishes: [ID]) {
    # ejecución de la mutación
    dishReadyToOrder(order_id: $order_id, dishes: $dishes) {
      dishes {
        _id
      }
    }
  }
`;

/*
  Mutation para cambiar el estado de un item entregado
*/
export const DISH_DELIVERED = gql`
  # definición de la mutación
  mutation DishDelivered($order_id: ID!, $dish_id: ID!) {
    # ejecución de la mutación
    dishDelivered(order_id: $order_id, dish_id: $dish_id) {
      dishes {
        _id
        count
      }
    }
  }
`;

/*
  Mutation para cambiar el estado de un item listo
*/
export const DISH_READY = gql`
  # definición de la mutación
  mutation DishReady($order_id: ID!, $dish_id: ID!) {
    # ejecución de la mutación
    dishReady(order_id: $order_id, dish_id: $dish_id) {
      dishes {
        _id
        count
      }
    }
  }
`;
