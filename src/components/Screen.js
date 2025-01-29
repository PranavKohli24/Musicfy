import React from 'react';
import Settings from './Settings';
import Games from './Games';
import Music from './Music';
import Coverflow from './Coverflow';
import './css/screen.css';

function Screen({ currentScreen, onBack }) {
  const renderContent = () => {
    switch (currentScreen) {
      case 'Settings':
        return <Settings />;
      case 'Games':
        return <Games />;
      case 'Music':
        return <Music />;
      case 'coverflow':
        return <Coverflow />;
      default:
        return <div>Unknown Screen</div>;
    }
  };

  return (
    <div id={currentScreen} className="screen">
      <button onClick={onBack}>Menu</button>
      {renderContent()}
    </div>
  );
}

export default Screen;
