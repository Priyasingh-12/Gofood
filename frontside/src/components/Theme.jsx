import React, { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import './themes.css';

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSwitcherVisible, setIsSwitcherVisible] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSwitcherVisibility = () => {
    setIsSwitcherVisible(!isSwitcherVisible);
  };

  return (
    <>
       {isSwitcherVisible && (
        <div className={`darkmode ${isDarkMode ? 'dark' : ''}`}>
          <BsSun onClick={toggleDarkMode} />
          <BsMoon onClick={toggleDarkMode} />
        </div>
      )}

      <button onClick={toggleSwitcherVisibility}>
        {isSwitcherVisible ? 'Hide Switcher' : 'Show Switcher'}
      </button>
      

      <style>
        {`
          body {
            background: ${isDarkMode ? '#202225' : '#f9f9f9'};
            color: ${isDarkMode ? 'white' : 'black'};
          }
        `}
      </style>
    </>
  );
};

export default Theme;
