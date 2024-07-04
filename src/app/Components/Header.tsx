"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-blue-600 dark:bg-gray-900 text-white dark:text-gray-300 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="flex space-x-4">
        <Link href="/info" legacyBehavior>
          <a className="hover:underline">Info</a>
        </Link>
        <Link href="/project" legacyBehavior>
          <a className="hover:underline">Project</a>
        </Link>
        <button
          onClick={toggleTheme}
          className="bg-gray-800 dark:bg-gray-300 dark:text-black text-white px-4 py-2 rounded"
        >
          Toggle Theme
        </button>
      </nav>
    </header>
  );
};

export default Header;
