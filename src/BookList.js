import React, { Component } from "react";
import axios from "axios";

// Components
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
import BookRow from "./BookRow";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      filteredBooks: this.props.books
    };

    this.filterBooks = this.filterBooks.bind(this);
    this.filterColors = this.filterColors.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks: filteredBooks });
  }

  filterColors(colorName) {
    return this.props.books.filter(book => book.color === colorName);
  }

  render() {
    let books = this.state.filteredBooks;
    const bookColor = this.props.match.params.colorName;
    if (bookColor) {
      books = this.filterColors(bookColor);
    }
    return (
      <div className="books">
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
