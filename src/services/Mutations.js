import { gql } from "apollo-boost";

// creacion de la consulta
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

// creacion de la consulta
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
