export const MODIFYWORD = "MODIFYWORD";

export const modifyWord = (palabra) => {
  return {
    type: MODIFYWORD,
    payload: palabra,
  };
};
