import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js'

const Shelf = ({ shelfName, books, onChangeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {/* Repeat of code in Book, really. ShelfTitle component? */}
        {shelfName.charAt(0).toUpperCase() + shelfName.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2").slice(1)}
      </h2>    
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onChangeShelf={onChangeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  shelfName: PropTypes.string,
  books: PropTypes.array,
  onChangeShelf: PropTypes.func
};

export default Shelf;