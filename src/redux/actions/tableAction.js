export const FETCH_TABLES = "FETCH_TABLES";
export const MODIFY_TABLE = "MODIFY_TABLE";

export const fetchTables = (tables) => {
  return {
    type: FETCH_TABLES,
    payload: tables,
  };
};

export const modifyTable = (payload) => {
  return {
    type: MODIFY_TABLE,
    payload,
  };
};
