import { ALLBooks } from "./actionTypes";
import initialState from "./inistialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLBooks:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
