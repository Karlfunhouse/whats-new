import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE
class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
      }
    }

    handleChange = (e) => {
      this.setState({searchValue: e.target.value.toLowerCase()})
    }

    findStory = (props) => {
      this.props.searchNews(this.state.searchValue.toLowerCase())
    }

    render() {
      return (
        <header className="header">
          <input type="text" id="search" className="search-bar" name="search" placeholder="Search for news article here." onChange={this.handleChange}/>
          <button className="search-button" onClick={this.findStory}>Search</button>
        </header>
      )
    }
  }

export default SearchForm;
