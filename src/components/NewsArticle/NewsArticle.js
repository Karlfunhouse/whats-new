import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE
const NewsArticle = (props) => {
  return(
    <section className="article-container">
      <img src={props.img} className="article-image"/>
      <h1 className="heading">{props.headline}</h1>
      <h3 className="description">{props.description}</h3>
      <form action={props.url} className="button-container">
        <button className="article-link" type="submit">Click Here To Read Full Article</button>
      </form>
    </section>
  )
}

export default NewsArticle;
