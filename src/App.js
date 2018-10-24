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
    this.callAjax = debounce(500, this.callAjax);
  }
  printChange(e) {
    this.callAjax(e.target.value);
  }
  callAjax(value) {
    console.log('value :: ', value);
    // call ajax
    this.updateQuery(value);
  }
  componentDidMount() {
    // BooksAPI.getAll().then((books) => console.log(books));
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
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
        query: query.trim()
      }));
    }
  }
  clearQuery = () => {
    this.updateQuery('')
  }

  // Could be made more generic, e.g. updateBook if we were changing 
  // some other property like a rating.
  changeShelf = (id, shelf) => {
    console.log(id, shelf);
    BooksAPI.update({ id: id }, shelf).then((books) => {
      BooksAPI.getAll().then((books) => this.setState({ books: books }))
    })
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
            <input type="text" onKeyUp={this.printChange.bind(this)} />
            <SearchBooks query={query} onUpdateQuery={this.updateQuery} onChangeShelf={this.changeShelf} results={results} />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
