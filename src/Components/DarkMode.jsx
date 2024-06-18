import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-neutral-800 dark:bg-neutral-900 p-4 text-white flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h1 className="text-xl">Dashboard</h1>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-neutral-700 p-2 rounded"
      >
        {darkMode ? <HiSun fontSize={24} /> : <HiMoon fontSize={24} />}
      </button>
    </header>
  );
};

export default Header;
