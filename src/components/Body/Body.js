import React from "react";
import AddBookForm from "./AddBookForm/AddBookForm";
import BookContainer from "./BookContainer/BookContainer";
import Navigation from "./Navigation/Navigation";

const Body = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="order-2 xl:-order-1">
          <Navigation />

          {/* card container */}
          <BookContainer />
        </div>

        {/* add book form */}
        <AddBookForm />
      </div>
    </main>
  );
};

export default Body;
