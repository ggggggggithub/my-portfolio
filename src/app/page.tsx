"use client";

import { useEffect, useState } from "react";
import Info from "./component/Info";
import Project from "./component/Project";
import "../../styles/animations.css";

export default function Home() {
  const study = ["React", "TypeScript", "TailwindCSS", "NextJS"];
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
    <div className="px-8 bg-white dark:bg-gray-800">
      <section className="min-h-screen flex flex-col justify-center items-center text-black dark:text-white">
        <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-2 leading-none">
          <h1 className="text-4xl md:text-6xl mb-1 text-center slide-in-down-fixed tracking-wider">
            Hello! I am
          </h1>
          <p className="text-6xl md:text-8xl font-bold mb-1 text-center">
            김성수
          </p>
          <div className="h-16 md:h-20 flex items-center">
            <p className="text-3xl md:text-4xl font-bold mb-1 text-center">
              {currentText}
            </p>
            <p className="text-3xl md:text-4xl font-bold mb-1 text-center">
              를 공부하는
            </p>
          </div>
        </div>
      </section>
      <section
        id="info"
        className="min-h-screen text-black scroll-mt-24 dark:text-white"
      >
        <Info />
      </section>
      <section
        id="project"
        className="min-h-screen text-black scroll-mt-24 dark:text-white"
      >
        <Project />
      </section>
    </div>
  );
}
