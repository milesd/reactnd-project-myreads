import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import { debounce } from 'throttle-debounce';

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
    allBooks: []
  }
  shelves = [
    'currentlyReading',
    'wantToRead',
    'read'
  ]
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({
      allBooks: books
    }));
  }
  setShelf = (moved_book, shelf) => {
    BooksAPI.update({ id: moved_book.id }, shelf).then((books) => {
      const arr1 = this.state.allBooks.filter(book => book.id !== moved_book.id);
      moved_book.shelf = shelf;
      return this.setState({
        allBooks: [...arr1, moved_book]
      })
    })
  }
  updateQuery = (query) => {
    console.log(`query: ${query} (${query.length})`)
    if (query.length < 1) {
      this.setState((previousState) => ({
        results: [],
        query: ''
      }))
    } else {
      BooksAPI.search(query).then((results) => {
        results.error ? (
          this.setState((previousState) => ({
            results: [],
            query: query
          }))
        ) : (
            this.setState((previousState) => ({
              results: results.map(result_book => this.state.allBooks.find(book => book.id === result_book.id) || result_book),
              query: query
            }))
          )
      })
    }
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      allBooks: books
    }));
  }
  render() {
    const { query, allBooks, results } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              {this.shelves.map((shelfName) => (
                <Shelf key={shelfName} shelfName={shelfName} onChangeShelf={this.setShelf} books={allBooks.filter(book => book.shelf === shelfName)} />
              ))}
            </div>
            <div className="open-search">
              <Link to='/search' className="close-search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (
          <div>
            <SearchBooks query={query} onUpdateQuery={this.updateQuery} onChangeShelf={this.setShelf} results={results} />
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
