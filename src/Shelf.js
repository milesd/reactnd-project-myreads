import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Book from './Book.js'

class Shelf extends Component {
  render() {
    const { name, books, onChangeShelf } = this.props;
    // console.log(books);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {name.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")}
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
}

// Shelf.propTypes = {
//   name: PropTypes.string,
//   books: PropTypes.array,
//   onChangeShelf: PropTypes.func
// };
export default Shelf;