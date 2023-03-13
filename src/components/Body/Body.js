import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../redux/thunk/fetchBooks";
import AddBookForm from "./AddBookForm";
import Book from "./Book";

const Body = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.books);
  const searchText = useSelector((state) => state.books.searchText);
  const searchBooks = bookList?.filter((book) =>
    book?.name?.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase())
  );
  const allBooks = searchText ? searchBooks : bookList;
  const [tab, setTab] = useState("all");
  const featuredBooks = allBooks?.filter((book) => book.featured);
  const books = tab === "all" ? allBooks : featuredBooks;

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                className={`filter-btn ${tab === "all" && "active-filter"}`}
                id="lws-filterAll"
                onClick={() => setTab("all")}
              >
                All
              </button>
              <button
                className={`filter-btn ${
                  tab === "featured" && "active-filter"
                }`}
                id="lws-filterFeatured"
                onClick={() => setTab("featured")}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="lws-bookContainer">
            {books?.map((book, index) => (
              <Book book={book} key={index} />
            ))}
          </div>
        </div>

        {/* add book form */}
        <AddBookForm />
      </div>
    </main>
  );
};

export default Body;
