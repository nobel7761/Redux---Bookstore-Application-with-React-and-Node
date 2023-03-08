import React, { useState, useRef } from "react";

const AddBookForm = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedBook = {
      name: name,
      author: author,
      thumbnail: image,
      price: price,
      rating: rating,
      featured: checked,
    };

    console.log("Submitted", submittedBook);
    formRef.current.reset();
  };
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
