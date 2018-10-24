import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { book, onChangeShelf } = this.props
    // console.log(`Shelf: ${book.shelf}`)
    // if(!book.shelf) book.shelf = 'none';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} name='shelf' onChange={(event) => onChangeShelf(book.id, event.target.value)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {/* {book.authors.map((author, index) =>
            <span key={index}>{author}</span>
          )} */}
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
export default Book;