import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
        state
      }
    }
  }
`;
