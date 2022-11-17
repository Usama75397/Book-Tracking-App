import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./BookAPI";
import Book from "./Book";

/* Search page */

const Search = (props) => {
  const [searchBook, setSearchBook] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input) {
      search(input).then((data) => {
        if (data.error) {
          setSearchBook([]);
        } else {
          setSearchBook(data);
        }
      });
    }
  }, [input]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/shelf" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBook.map((book) => (
            <li key={book.id}>
              <Book book={book} changeBookShelf={props.updateBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
