import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import Book from './Book.js'


const SearchResults = ({ query, results, onUpdateQuery, onChangeShelf }) => {
  return (
    <div className="search-books-results">
      <div className="search-books-count">
        {/* Silly pluralization */}
        {query.length > 0 && (
          `${results.length} match${results.length === 1 ?'':'es'}`
        )}
      </div>
      <ol className="books-grid">
        {results.map((book) => (
          <li key={book.id}>
            <Book book={book} onChangeShelf={onChangeShelf} shelfIndicator/>
          </li>
        ))}
      </ol>
    </div>
  )
}
const SearchBooks = ({ query, results, onUpdateQuery, onChangeShelf }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          <DebounceInput
            className='search-books'
            type='text'
            placeholder="Search by title or author"
            value={query}
            minLength={2}
            debounceTimeout={400}
            onChange={(event) => onUpdateQuery(event.target.value)}
          />
        </div>
      </div>
      <SearchResults query={query} results={results} onChangeShelf={onChangeShelf} />
    </div>
  )
}

SearchBooks.propTypes = {
  query: PropTypes.string,
  results: PropTypes.array,
  onUpdateQuery: PropTypes.func,
  onChangeShelf: PropTypes.func
};

export default SearchBooks;