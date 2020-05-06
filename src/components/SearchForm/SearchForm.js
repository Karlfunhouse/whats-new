import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE
class SearchForm extends Component {
  constructor(props) {
    super(props)
    }

    render() {
      return (
        <header className="header">
          <input type="text" id="search" className="search-bar" name="search" placeholder="Search for news article here." />
          <button className="search-button">Search</button>
        </header>
      )
    }
  }

export default SearchForm;
