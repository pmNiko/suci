export const FETCH_TABLES = "FETCH_TABLES";
export const MODIFY_TABLE = "MODIFY_TABLE";
export const RESET_TABLE = "RESET_TABLE";

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

export const resetTable = (number) => {
  return {
    type: RESET_TABLE,
    payload: number,
  };
};
