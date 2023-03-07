import { ALLBOOKS } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLBOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
