import React from 'react';
import Shelf from '../Shelf';
import {link} from 'react-router-dom';



class MainPage extends React.Component {
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf/>
          <Shelf/>
          <Shelf/>
        </div>
        <div className="open-search">
          <link to="/search">Add a book</link>
        </div>
      </div>

    );
  }
}

export default MainPage;
