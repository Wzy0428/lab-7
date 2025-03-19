import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  //Initialize the state from localStorage, first checks localStorage to see if a theme 
  //was previously saved.If no theme is found in localStorage, it defaults to "light" mode.
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  //When the button is clicked, toggleTheme() is executed, switching between light and dark mode.
  //The new theme is saved in both state (setTheme) and localStorage.
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  //Apply the theme class to the document body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  //Clicking the button triggers toggleTheme(), changing the theme.
  return (
    <button onClick={toggleTheme} className="theme-switcher">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;
