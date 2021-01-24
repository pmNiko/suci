import { gql } from "apollo-boost";

// query "dishes" a la api de GraphQL
export const GET_DISHES = gql`
  {
    dishes {
      _id
      name
      price
      category
    }
  }
`;

// query "orders" a la api de GraphQL
export const GET_ORDERS = gql`
  {
    orders {
      _id
      number
      date
      time
      table
      closed
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

export const GET_TABLES = gql`
  {
    tables {
      number
      color
      free
      order
    }
  }
`;
