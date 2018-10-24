import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Book from './Book.js'

class SearchBooks extends Component {

  printChange(e) {
    this.callAjax(e.target.value);
  }
  callAjax(value) {
    console.log('value :: ', value);
    // call ajax
    this.updateQuery(value);
  }
  
  render() {
    const { query, results, onUpdateQuery, onChangeShelf } = this.props;
    console.log(results);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              className='search-books'
              type='text'
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => onUpdateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.map((book) => (
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

// SearchBooks.propTypes = {
//   query: PropTypes.string,
//   results: PropTypes.array,
//   onUpdateQuery: PropTypes.func, 
//   onChangeShelf: PropTypes.func
// };
export default SearchBooks;