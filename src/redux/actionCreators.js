import {
  ADDBOOK,
  DELETE,
  EDIT,
  LOADED,
  SEARCHBOOK,
  UPDATE,
} from "./actionTypes";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (book) => {
  return {
    type: ADDBOOK,
    payload: book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE,
    payload: bookId,
  };
};

export const editBook = (bookId) => {
  return {
    type: EDIT,
    payload: bookId,
  };
};

export const updateBook = (bookId) => {
  return {
    type: UPDATE,
    payload: bookId,
  };
};

export const searchBook = (searchText) => {
  return {
    type: SEARCHBOOK,
    payload: searchText,
  };
};
