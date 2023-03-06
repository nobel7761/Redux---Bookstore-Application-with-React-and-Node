import { ADDBOOK, ALLBooks, DELETE, EDIT, FEATUREDBOOKS } from "./actionTypes";

export const addBook = (book) => {
  return {
    type: ADDBOOK,
    payload: book,
  };
};

export const removeBook = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const editBook = (id) => {
  return {
    type: EDIT,
    payload: id,
  };
};

export const allBooks = (books) => {
  return {
    type: ALLBooks,
    payload: books,
  };
};

export const featuredBooks = () => {
  return {
    type: FEATUREDBOOKS,
  };
};
