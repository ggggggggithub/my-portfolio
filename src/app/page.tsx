import Header from "./Components/Header";
import Info from "./Components/Info";
import Project from "./Components/Project";
import "../../styles/animations.css";

export default function Home() {
  const study = ["React", "typescript", "tailwindCSS", "Redux"];

  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-black dark:text-white px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-xl mb-4 text-center">Hello, I am</h1>
          <p className=" text-6xl font-bold mb-4 text-center">김성수</p>
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
