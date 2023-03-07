import { addBooks } from "../actionCreators";

const fetchBooks = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();

  dispatch(addBooks(books));
};

export default fetchBooks;
