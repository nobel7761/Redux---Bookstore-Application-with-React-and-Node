import reducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  books: reducer,
});

export default rootReducer;
