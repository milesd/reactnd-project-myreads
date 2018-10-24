import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
// My local changes 
import Shelf from './Shelf.js'
import Book from './Book.js'
import SearchBooks from './SearchBooks.js'

// const shelf1 = [{name: 'name1', shelf: 'a'},{name: 'name2', shelf: 'a'}];
// const shelf2 = [{name: 'name3', shelf: 'b'},{name: 'name4', shelf: 'b'}];
// const allBooks = [...shelf1, ...shelf2];

// const filter = books => shelf => books.filter(b => {
//   return b.shelf === shelf;
// });

// const filterBy = filter(allBooks);
// const booksOnShelf = filterBy('b');
/**
 * TODO: Instead of using this state variable to keep track of which page
 * we're on, use the URL in the browser's address bar. This will ensure that
 * users can use the browser's back and forward buttons to navigate between
 * pages, as well as provide a good URL they can bookmark and share.
 */



class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    query: '',
    results: [],
    books: []
  }
  shelves = ['currentlyReading', 'wantToRead', 'read', 'none']
  componentDidMount() {
    // BooksAPI.getAll().then((books) => console.log(books));
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
  }
  updateQuery = (query) => {
    console.log(query);
    BooksAPI.search(query).then((results) => this.setState({
      results: results,
      query: query.trim()
    }));
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  // Could be made more generig, e.g. updateBook
  changeShelf = (id, shelf) => {
    console.log(id, shelf);
    BooksAPI.update({ id: id }, shelf).then((books) => {
      BooksAPI.getAll().then((books) => this.setState({ books: books }))
    })
  }

  render() {
    const { query } = this.state
    return (
      <div className="app">
        {/* <pre>
          {JSON.stringify(this.state.books, null, 2)}
        </pre> */}
        {this.state.showSearchPage ? (
          <SearchBooks query={query} onUpdateQuery={this.updateQuery} onChangeShelf={this.changeShelf} results={this.state.results} />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <div className="list-books-content">
                {this.shelves.map((name) => (
                  <Shelf name={name} onChangeShelf={this.changeShelf} books={this.state.books.filter(book => book.shelf == name)} />
                ))}
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
