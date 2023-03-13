import { updateBook } from "../actionCreators";

const updateBookThunk = (book) => {
  console.log("thunk before find the book", book);
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${book.id}`, {
      method: "PATCH",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const updatedBook = await response.json();
    console.log("updated book from update thunk", updatedBook);
    dispatch(updateBook(updatedBook.id));
  };
};

export default updateBookThunk;
