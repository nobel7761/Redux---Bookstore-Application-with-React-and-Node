import { allBooks } from "../actionCreators";

const fetchBooks = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();

  console.log(books);

  dispatch(allBooks(books));
};

export default fetchBooks;
