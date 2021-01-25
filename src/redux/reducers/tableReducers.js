import { FETCH_TABLES, MODIFY_TABLE } from "../actions/tableAction";

// Estado inicial
const initialState = { tables: [] };

export function table(state = initialState, action) {
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
              table.free = false;
              table.order = action.payload.order_id_param;
            }
            return table;
          }),
        ],
      };

    default:
      return state;
  }
}
