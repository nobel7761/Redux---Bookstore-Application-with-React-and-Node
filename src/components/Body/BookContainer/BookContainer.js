import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../../redux/thunk/fetchBooks";
import Book from "./Book";

const BookContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  console.log("books", books);

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className="lws-bookContainer">
      {books.map((book, index) => (
        <Book book={book} key={index} />
      ))}
    </div>
  );
};

export default BookContainer;
