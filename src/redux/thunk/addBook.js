import { added } from "../actionCreators";

const addBook = (book) => {
  const { name, author, thumbnail, price, rating, featured } = book;
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        author: author,
        thumbnail: thumbnail,
        price: price,
        rating: rating,
        featured: featured,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const book = await response.json();
    dispatch(added(book));
  };
};

export default addBook;
