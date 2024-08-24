// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      const sections = ["info", "project"];
      const scrollPosition = window.scrollY + 80; // Offset for fixed header height

      let foundActiveSection = false;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            foundActiveSection = true;
          }
        }
      });

      if (!foundActiveSection) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header className="bg-blue-600 dark:bg-gray-900 text-white dark:text-gray-300 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 px-40">
      <h1 className="text-2xl font-bold">KimSeoungSu</h1>
      <nav className="flex space-x-6 ">
        <button
          onClick={() => scrollToSection("info")}
          className={`text-lg ml-20 hover:underline ${
            activeSection === "info" ? "underline text-red-500" : ""
          }`}
        >
          Info
        </button>
        <button
          onClick={() => scrollToSection("project")}
          className={`text-lg hover:underline ${
            activeSection === "project" ? "underline text-red-500" : ""
          }`}
        >
          Project
        </button>
        <button
          onClick={toggleTheme}
          className="bg-gray-800 dark:bg-gray-300 dark:text-black text-white px-4 py-2 rounded flex items-center justify-center"
        >
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            className="w-5 h-5"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
