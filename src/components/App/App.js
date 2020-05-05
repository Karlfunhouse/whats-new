import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super()
    
  }

  render () {
    return (
      <div className="app">

        <NewsContainer />
      </div>
    )
  }
}

export default App;
