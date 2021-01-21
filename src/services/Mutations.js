import { gql } from "apollo-boost";

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
