import {
  ADDBOOK,
  DELETE,
  EDIT,
  LOADED,
  SEARCHBOOK,
  UPDATE,
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return { ...state, books: action.payload };

    case ADDBOOK:
      return { ...state, books: [...state.books, action.payload] };

    case DELETE:
      return {
        ...state,
        books: state.books.filter((item) => item.id !== action.payload),
      };

    case EDIT:
      const selectedBook = state.books.find(
        (book) => book.id === action.payload
      );
      return {
        ...state,
        toggleForm: true,
        updateBook: { ...state.updateBook, selectedBook },
      };

    case UPDATE:
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload) {
            return { ...action.payload };
          } else return book;
        }),
        toggleForm: false,
      };

    case SEARCHBOOK:
      return {
        ...state,
        searchText: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
