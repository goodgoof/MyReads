import React from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book';



class SearchPage extends React.Component {
  constructor(props) {
    super(props)
      this.state ={
        books: [],
        results: [],
        query: ""
      }
  }

  componentDidMount() {
    BooksAPI.getAll()

      .then(response => {
        console.log(response)

        this.setState({books: response});
      })

  }

  updateQuery = (query) => {
    this.setState({query:query}, this.submitSearch);
  }

  submitSearch = () => {
    if(this.state.query === "" || this.state.query === undefined) {
      return this.setState({results: []});
    }

    BooksAPI.search(this.state.query.trim()).then(response => {
      if(response.error){
        return this.setState({results: [] })
      }
      else {
        response.forEach(b =>{
          let f = this.state.books.filter(B => B.id === b.Id);
          if(f[0]) {b.shelf = f[0].shelf}

        })
        return this.setState({results: response});
      }
    })
  }
  updateBook=(book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      book.shelf =shelf
      this.setState(state =>({
        Books: state.books.filter(b => b.id !== Book.Id).concat({Book})
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
            onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.results.map((book, key) => (<Book updateBook = {this.updateBook} book ={book} key={key}/>))
          }

          </ol>
          </div>
      </div>
    );
  }
}


export default SearchPage;
