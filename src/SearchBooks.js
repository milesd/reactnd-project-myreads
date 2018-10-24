import React, { Component } from 'react';
import Book from './Book.js'

class SearchBooks extends Component {
  // componentDidMount() {
  //   // BooksAPI.getAll().then((books) => console.log(books));
  //   // BooksAPI.getAll().then((books) => this.setState({
  //   //   books: books
  //   // }));
  //   this.setState({
  //     query: this.props.query
  //   })
  // }
  // updateQuery = (query) => {
  //   this.setState(() => ({
  //     query: query.trim()
  //   }))
  //   BooksAPI.search().then((books) => this.setState({
  //     books: books
  //   }));
  // }
  // clearQuery = () => {
  //   this.updateQuery('')
  // }
  render() {
    const { query, results, onUpdateQuery, onChangeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a> */}
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
              // onChange={(event) => this.updateQuery(event.target.value)}
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

export default SearchBooks;