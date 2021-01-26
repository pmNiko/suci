export const FETCH_TABLES = "FETCH_TABLES";
export const MODIFY_TABLE = "MODIFY_TABLE";
export const RESET_TABLE = "RESET_TABLE";

// Consume desde la API las mesas exitentes
export const fetchTables = (tables) => {
  return {
    type: FETCH_TABLES,
    payload: tables,
  };
};

// Cambia el estado de disponibilidad a ocupado
export const modifyTable = (payload) => {
  return {
    type: MODIFY_TABLE,
    payload,
  };
};

// Cambia el estado de disponibilidad a libre
export const resetTable = (number) => {
  return {
    type: RESET_TABLE,
    payload: number,
  };
};
