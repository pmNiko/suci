import {
  FETCH_TABLES,
  MODIFY_TABLE,
  RESET_TABLE,
} from "../actions/tableAction";

// Estado inicial
const initialState = { tables: [] };

export function table(state = initialState, action) {
  console.log("Reducer: ", action.type);
  switch (action.type) {
    case FETCH_TABLES:
      return {
        tables: action.payload,
      };

    case MODIFY_TABLE:
      return {
        tables: [
          ...state.tables.map((table) => {
            if (table.number === action.payload.number) {
              table.free = !table.free;
              table.order = action.payload.order_id_param;
            }
            return table;
          }),
        ],
      };

    case RESET_TABLE:
      return {
        tables: [
          ...state.tables.map((table) => {
            if (table.number === action.payload) {
              table.free = !table.free;
              delete table.order;
            }
            return table;
          }),
        ],
      };

    default:
      return state;
  }
}
