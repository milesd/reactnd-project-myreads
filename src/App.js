import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { debounce } from 'throttle-debounce';

import './App.css'
// My local changes 
import Shelf from './Shelf.js'
import SearchBooks from './SearchBooks.js'

// const shelf1 = [{name: 'name1', shelf: 'a'},{name: 'name2', shelf: 'a'}];
// const shelf2 = [{name: 'name3', shelf: 'b'},{name: 'name4', shelf: 'b'}];
// const allBooks = [...shelf1, ...shelf2];

// const filter = books => shelf => books.filter(b => {
//   return b.shelf === shelf;
// });

// const filterBy = filter(allBooks);
// const booksOnShelf = filterBy('b');

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    query: '',
    results: [],
    books: []
  }
  shelves = [
    'currentlyReading',
    'wantToRead',
    'read'
  ]
  constructor() {
    super();
    // this.callAjax = debounce(500, this.callAjax);
    this.updateQuery = debounce(500, this.updateQuery);
    // this.getAllBooks();
  }
  callAjax(value) {
    console.log('value :: ', value);
    // call ajax
    this.updateQuery(value);
  }
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
  }
  // Could be made more generic, e.g. updateBook if we were changing 
  // some other property like a rating.
  changeShelf = (moved_book, shelf) => {
    BooksAPI.update({ id: moved_book.id }, shelf).then((books) => {
      const arr1 = this.state.books.filter(book => book.id !== moved_book.id);
      moved_book.shelf = shelf;
      return this.setState({ books: [...arr1, moved_book]}) //&& this.forceUpdate();
    })
  }
  // Search methods
  updateQueryString(e) {
    this.callAjax(e.target.value);
  }
  updateQuery = (query) => {
    console.log(`query: ${query} (${query.length})`)

    if (query.length < 1) {
      this.setState({
        results: [],
        query: ''
      });
    } else {
      BooksAPI.search(query).then((results) => results.error ? this.setState({
        results: [],
        query: query.trim()
      }) : this.setState({
        results: results,
        // results: results.filter(book => book.shelf !== 'none'),
        query: query.trim()
      }));
    }
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  componentDidMount() {
    // BooksAPI.getAll().then((books) => console.log(books));
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
    console.log(this.state.books);
  }
  render() {
    const { query, books, results } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              {this.shelves.map((name) => (
                <Shelf name={name} onChangeShelf={this.changeShelf} books={books.filter(book => book.shelf === name)} />
              ))}
            </div>
            <div className="open-search">
              <Link to='/search' className="close-search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (
          <div>
            {/* <input type="text" onKeyUp={this.updateQueryS tring.bind(this)} /> */}
            {/* <SearchBooks query={query} onUpdateQuery={this.updateQueryString} onChangeShelf={this.changeShelf} results={results} /> */}
            <SearchBooks query={query} onUpdateQuery={this.updateQueryString.bind(this)} onChangeShelf={this.changeShelf} results={results} />
            {/* <SearchBooks query={query} onUpdateQuery={this.updateQuery} onChangeShelf={this.changeShelf} results={results} /> */}
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
