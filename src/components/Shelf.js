import React, {Component} from "react";
import Book from './Book';
// import { Link } from 'react-router-dom';

class Shelf extends Component {
  componentDidMount() {
    console.log(this)
  }
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.map((book, key) => <Book updateBook={this.props.updateBook}book={book} key={key}/>)
            }
          </ol>
        </div>

      </div>
    );
  }
}

export default Shelf
