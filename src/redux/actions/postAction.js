// tag
export const MODIFYWORD = "MODIFYWORD";

// action
export const modifyWord = (palabra) => {
  return {
    type: MODIFYWORD,
    payload: palabra,
  };
};
