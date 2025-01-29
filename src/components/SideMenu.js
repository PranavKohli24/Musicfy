import React, { useState } from 'react';
import './css/screen.css';

function SideMenu({ options, onClick }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleRotate = (direction) => {
    if (direction === 'up') {
      setSelectedIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    } else if (direction === 'down') {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % options.length);
    }
  };

  const handleSelect = () => {
    onClick(options[selectedIndex]);
  };

  return (
    <div className="menu">
      <table id="side-menu">
        <tbody>
          {options.map((option, index) => (
            <tr key={index}>
              <td className={selectedIndex === index ? 'active' : ''}>{option}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="controls">
        <button onClick={() => handleRotate('up')}>Up</button>
        <button onClick={handleSelect}>Select</button>
        <button onClick={() => handleRotate('down')}>Down</button>
      </div>
    </div>
  );
}

export default SideMenu;
