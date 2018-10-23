import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

import Book from './Book.js'

class Shelf extends Component {
  state = {
    title: '',
    books: []
  }  
  componentWillMount() {
    this.setState({title: this.props.name.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")});
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.state.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book title={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;