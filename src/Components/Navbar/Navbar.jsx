import React, { useState } from 'react';
import { FiSun, FiMoon, FiShoppingCart } from 'react-icons/fi';
import image1 from "../../assets/Key.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark theme
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md transition-colors">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Website Name - Shifted to the left and colorful */}
        <div className="flex items-center space-x-2">
          <img src={image1} alt="Logo" className="h-8 w-8" /> {/* Adjust size as needed */}
          <div className="text-2xl font-bold text-black dark:text-indigo-100">BorrowBox</div>
        </div>

        {/* Centered Search Bar */}
        <div className="flex items-center flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none shadow-md"
          />
        </div>

        {/* Options: Sign In, Sign Up, Cart, Dark Mode */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-900 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Login
          </button>

          {/* Cart Icon */}
          <button className="relative text-gray-700 dark:text-gray-300">
            <FiShoppingCart size={24} />
            <span className="absolute top-0 right-0 -mt-1 -mr-2 px-1.5 text-xs font-bold bg-red-600 text-white rounded-full">3</span>
          </button>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300">
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
