import React, { useState } from 'react';
import './App.css';
import Screen from './components/Screen';
import SideMenu from './components/SideMenu';

function App() {
  const [currentScreen, setCurrentScreen] = useState(null);
  const [menuOptions, setMenuOptions] = useState(['coverflow', 'Settings', 'Games', 'Music']);

  const handleMenuClick = (option) => {
    setCurrentScreen(option);
  };

  const handleBackToMenu = () => {
    setCurrentScreen(null);
  };

  return (
    <div className="App">
      {currentScreen === null && (
        <SideMenu options={menuOptions} onClick={handleMenuClick} />
      )}
      {currentScreen !== null && (
        <Screen currentScreen={currentScreen} onBack={handleBackToMenu} />
      )}
    </div>
  );
}

export default App;
