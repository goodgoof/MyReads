import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book';



class SearchPage extends React.Component {
  constructor(props) {
    super(props)
      this.state ={
        books: [],
        results: []
      }
  }

  componentDidMount() {
    BooksAPI.getAll()

      .then(response => {
        console.log(response)

        this.setState({books: response});
      })

  }

  updateBook=(book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      book.shelf =shelf
      this.setState(state =>({
        Books: state.book.filter(b => b.id !== Book.Id).concat({Book})
      }))
    })
  }
  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value ={this.state.query}
            onChange/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          </div>
      </div>
    );
  }
}


export default SearchPage;
