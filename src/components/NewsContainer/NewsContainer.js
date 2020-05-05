import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE
const NewsContainer = (props) => {
  console.log("props", props);
  const localArticles = props.local.local.map(article => {
    return <NewsArticle
      key={article.id}
      headline={article.headline}
      img={article.img}
      description={article.description}
      url={article.url}
    />
  })

    return (
      <section>
          {localArticles}
      </section>
    )
}


export default NewsContainer;
