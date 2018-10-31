import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
// import Shelf from './components/Shelf';
// import Book from './components/Book';
import {Route} from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import SearchPage from './components/pages/SearchPage';
// import Shelf from './components/Shelf';



class BooksApp extends React.Component {

    render() {
      return (
        <div>
          <Route exact path="/" component={MainPage}/>
          <Route exact path="/search" component={SearchPage}/>
        </div>
      )
    }

}
export default BooksApp
