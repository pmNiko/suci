import { MODIFYWORD } from "../actions/postAction";

const initialState = {
  palabra: "",
};

function palabra(state = initialState, action) {
  console.log(action.payload);
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
