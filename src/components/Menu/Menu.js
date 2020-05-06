import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
const Menu = (props) => {
  return(
    <aside className="nav-menu">
      <h1 className="title">What's<span className="yellow"> News?</span></h1>
      <button className="nav-button" onClick={() => props.displayArticles('local')}>Local News</button>
      <button className="nav-button" onClick={() => props.displayArticles('technology')}>Technology</button>
      <button className="nav-button" onClick={() => props.displayArticles('entertainment')}>Entertainment</button>
      <button className="nav-button" onClick={() => props.displayArticles("science")}>Science</button>
      <button className="nav-button" onClick={() => props.displayArticles("health")}>Health</button>
    </aside>
  )
}

export default Menu;
