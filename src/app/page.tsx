"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Project from "./Components/Project";
import "../../styles/animations.css";

export default function Home() {
  const study = ["React", "TypeScript", "TailwindCSS", "Redux"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const fullText = study[loopNum % study.length];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait for a while before starting to delete
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setCurrentIndex((currentIndex + 1) % study.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum]);

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-black dark:text-white px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl mb-4 text-center tracking-widest slide-in-down">
            Hello, I am
          </h1>
          <p className="text-6xl font-bold mb-4 text-center">김성수</p>
          <div className="text-2xl font-bold mb-4 text-center">
            <span className="typing">{currentText}</span>
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
