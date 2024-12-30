import React, { useState, useEffect } from 'react';
import './Problem18.css'; 

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
        <button onClick={toggleTheme} className="theme-button">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>
    </div>
  );
}

export default App;