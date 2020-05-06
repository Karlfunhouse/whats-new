import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = (props) => {
  console.log("props", props);
  const localArticles =
  props.local.local.map(article => {
    return <NewsArticle
      key={article.id}
      {...article}
    />
  })

  const healthArticles =
  props.health.health.map(article => {
    return <NewsArticle
      key={article.id}
      {...article}
    />
  })

  const entertainmentArticles =
  props.entertainment.entertainment.map(article => {
    return <NewsArticle
      key={article.id}
      {...article}
    />
  })

  const scienceArticles =
  props.science.science.map(article => {
    return <NewsArticle
      key={article.id}
      {...article}
    />
  })

  const technologyArticles =
  props.technology.technology.map(article => {
    return <NewsArticle
      key={article.id}
      {...article}
    />
  })

    return (
      <section className="news-container">
          {localArticles}
      </section>
    )
}


export default NewsContainer;
