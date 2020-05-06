import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentArticles: local,
      local: local,
      health: health,
      entertainment: entertainment,
      science: science,
      technology: technology
    }
  }

  displayArticles = (category) => {
    this.setState({currentArticles: this.state[category]})
  }

  searchNews = (search) => {
    let foundStory = this.state.currentArticles.filter(article => {
      return article.headline.includes(search) ||
      article.description.includes(search)
    })

    this.setState({currentArticles: foundStory})
    }



  render () {
    return (
      <main className="app">
        <Menu displayArticles={this.displayArticles}/>
        <section className="main-page">
          <SearchForm searchNews={this.searchNews}/>
          <NewsContainer currentArticles={this.state.currentArticles} />
        </section>
      </main>
    )
  }
}

export default App;
