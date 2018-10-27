import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onChangeShelf, shelfIndicator }) => {
  // Set shelf -- not present in the search results.
  if (!book.shelf) book.shelf = 'none';
  // Handle missing thumbnails -- maybe point to generic image?
  const thumbnail_url = book.imageLinks && book.imageLinks.thumbnail ? `url(${book.imageLinks.thumbnail})` : 'none';
  const coverStyle = {
    width: 128, 
    height: 188, 
    backgroundImage: thumbnail_url
  }
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={coverStyle}></div>
        {/* Display a chip indicating that the book in a search result is already on a shelf. Should be a separate component.  */}
        { shelfIndicator && book.shelf !== 'none' && (
          <div className="book-shelf-chip">
            {/* Ugly hack to make the shelf titles capitalized. */}
            {book.shelf.charAt(0).toUpperCase() + book.shelf.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2").slice(1)}
          </div>
        ) }
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf} name='shelf' onChange={(event) => onChangeShelf(book, event.target.value)}>
            {/* Hard coded, really should share with shelves in BooksApp */}
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
        {book.authors && book.authors.map((author, index) =>
          <span key={index}>{author}</span>
        )}
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object,
  onChangeShelf: PropTypes.func
};

export default Book;