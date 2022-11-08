const AddBook = (props) => {
    return (
      <div className="list-books">
        <div className="open-search">
          <a onClick={() => props.setShowSearchpage(!props.showSearchPage)}>
            Add a book
          </a>
        </div>
      </div>
    );
  };
  
  export default AddBook;
