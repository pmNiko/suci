import { MODIFYWORD } from "../actions/postAction";

const initialState = {
  palabra: "",
};

function palabra(state = initialState, action) {
  switch (action.type) {
    case MODIFYWORD:
      return {
        ...state,
        palabra: action.payload,
      };
    default:
      return state;
  }
}

export default palabra;
