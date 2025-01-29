


import React, { useState } from 'react';
import AllSongs from './AllSongs';
import Artists from './Artists';

function Music(props) {
  const [currentSubmenu, setCurrentSubmenu] = useState('All songs');

  const subMenuOptions = ['All songs', 'Artists'];

  const handleSubMenuClick = (submenu) => {
    setCurrentSubmenu(submenu);
  };

  return (
    <div id="Music">
      <h2>Music Menu</h2>
      <ul>
        {subMenuOptions.map((option, index) => (
          <li key={index} onClick={() => handleSubMenuClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        {currentSubmenu === 'All songs' && <div><AllSongs/></div>}
        {currentSubmenu === 'Artists' && <div><Artists/></div>}
      </div>
    </div>
  );
}

export default Music;
