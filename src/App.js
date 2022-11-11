import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Categories from "./components/categories";
import Search from "./components/searchBook";
import { getAll, update } from "./components/BookAPI";
import AddBook from "./components/addbook";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const updateBookShelf = (book, whereToMove) => {
    let a = true;
    const updateBook = books.map((b) => {
      if (b.id === book.id) {
        b.shelf = whereToMove;
        a = false
      }
      return b;
    });

    if (a){
      book.shelf = whereToMove;
      updateBook.push(book);
    }

    setBooks(updateBook);
    update(book, whereToMove);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          setShowSearchpage={setShowSearchpage}
          updateBookShelf={updateBookShelf}
        />
      ) : (
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <Categories books={books} updateBookShelf={updateBookShelf} />
            <div className="open-search">
              <AddBook setShowSearchpage={setShowSearchpage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
