"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Project from "./Components/Project";
import "../../styles/animations.css";

export default function Home() {
  const study = ["React", "TypeScript", "TailwindCSS", "Redux"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const handleType = () => {
      const fullText = study[loopNum % study.length];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      const nextSpeed = isDeleting ? 50 : 150;
      setTypingSpeed(nextSpeed);
    };

    const timer = setTimeout(() => handleType(), typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, study]);

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-black dark:text-white px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
          <h1 className="text-4xl mb-4 text-center slide-in-down tracking-wider absolute top-1/3 transform -translate-y-1/2 whitespace-nowrap">
            Hello, I am
          </h1>
          <p className="text-6xl font-bold mb-4 text-center absolute top-1/2 transform -translate-y-1/2 whitespace-nowrap">
            김성수
          </p>
          <p className="text-4xl font-bold mb-4 text-center absolute top-2/3 transform -translate-y-1/2 whitespace-nowrap">
            {currentText}
          </p>
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
