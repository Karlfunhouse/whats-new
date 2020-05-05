import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (props) => {
  return(
    <section>
      <img src={props.img} className="article-image"/>
      <h1 className="heading">{props.headline}</h1>
      <h3 className="description">{props.description}</h3>
      <button>{props.url}</button>
    </section>
  )
}

export default NewsArticle;
