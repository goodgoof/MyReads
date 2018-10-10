import React from 'react';
import {link} from 'react-router-dom';

class SearchPage extends React.Component {
  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <link className="close-search" to="/">Close</link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>

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