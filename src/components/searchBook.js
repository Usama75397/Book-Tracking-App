import React, { useEffect, useState } from "react";
import { search } from "./BookAPI";
import Book from "./Book";

const Search = (props) => {
  const [searchBook, setSearchBook] = useState([]);
  const [api, setApi] = useState("");

  useEffect(() => {
    if (api) {
      search(api).then((data) => {
        if (data.error) {
          setSearchBook([]);
        } else {
          setSearchBook(data);
        }
      });
    }
  }, [api]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => props.setShowSearchpage(props.showSearchPage)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={api}
            onChange={(e) => setApi(e.target.value)}
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
