import React, { Component } from 'react';


class Book extends Component {
  state = {
  }
  handleChange = (event) => {
    console.log(event);
    this.setState({shelf: event.target.value})
  } 
  componentWillMount() {
    this.setState({shelf: this.props.title.shelf});
  }
  render() {
    const { shelf } = this.state;
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.title.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title.title}</div>
        <div className="book-authors">
          {this.props.title.authors.map((author, index) =>
            <span key={index}>{author}</span>
          )}
        </div>
      </div>
    )
  }
}

export default Book;