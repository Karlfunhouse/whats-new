import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: {local}
    }

  }

  render () {
    return (
      <main className="app">

        <NewsContainer local={this.state.local}/>
      </main>
    )
  }
}

export default App;
