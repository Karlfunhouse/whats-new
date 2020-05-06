import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = (props) => {
  console.log("props", props);
  const articles =
  props.currentArticles.map(article => {
    return <NewsArticle
      key={article.id}
      {...article}
    />
  })


    return (
      <section className="news-container">
          {articles}
      </section>
    )
}


export default NewsContainer;
