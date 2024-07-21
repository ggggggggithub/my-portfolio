"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Project from "./Components/Project";
import "../../styles/animations.css";

export default function Home() {
  const study = ["React", "typescript", "tailwindCSS", "Redux"];
  const [currentText, setCurrentText] = useState(study[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const changeText = () => {
      if (isDeleting) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % study.length);
      } else {
        setIsDeleting(true);
      }
    };

    const interval = setInterval(changeText, isDeleting ? 500 : 4000); // Change text every 4 seconds when typing, faster when deleting
    return () => clearInterval(interval);
  }, [isDeleting]);

  useEffect(() => {
    if (!isDeleting) {
      setCurrentText(study[currentIndex]);
    }
  }, [currentIndex, isDeleting]);
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-black dark:text-white px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-xl mb-4 text-center slide-in-down">
            Hello, I am
          </h1>
          <p className=" text-6xl font-bold mb-4 text-center">김성수</p>
          <div className="text-2xl font-bold mb-4 text-center">
            <span
              key={currentText}
              className={`typing ${isDeleting ? "deleting" : ""}`}
            >
              {currentText}
            </span>
          </div>
        </div>
      </section>
      <section
        id="info"
        className="min-h-screen bg-green-100 dark:bg-gray-700 text-black dark:text-white"
      >
        <Info />
      </section>
      <section
        id="project"
        className="min-h-screen bg-yellow-100 dark:bg-gray-600 text-black dark:text-white"
      >
        <Project />
      </section>
    </div>
  );
}
