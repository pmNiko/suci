import { gql } from "apollo-boost";

/*
  Esta Query trae los platos desde la API GraphQL
*/
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

/*
  Esta Query trae las comandas desde la API GraphQL
*/
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

/*
  Esta Query trae las mesas desde la API GraphQL
*/
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
