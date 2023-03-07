import { ALLBOOKS } from "./actionTypes";

export const addBooks = (books) => {
  return {
    type: ALLBOOKS,
    payload: books,
  };
};
