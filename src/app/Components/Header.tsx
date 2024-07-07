"use client";

import { useState, useEffect } from "react";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-blue-600 dark:bg-gray-900 text-white dark:text-gray-300 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="flex space-x-4">
        <button
          onClick={() => scrollToSection("info")}
          className="hover:underline"
        >
          Info
        </button>
        <button
          onClick={() => scrollToSection("project")}
          className="hover:underline"
        >
          Project
        </button>
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
