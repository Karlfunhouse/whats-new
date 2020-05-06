import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
const Menu = () => {
  return(
    <aside className="nav-menu">
      <button className="nav-button" id="local-news">Local News</button>
      <button className="nav-button" id="technology">Technology</button>
      <button className="nav-button" id="entertainment">Entertainment</button>
      <button className="nav-button" id="science">Science</button>
      <button className="nav-button" id="health">Health</button>
    </aside>
  )
}

export default Menu;
