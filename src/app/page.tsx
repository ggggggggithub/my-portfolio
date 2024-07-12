import Header from "./Components/Header";
import Info from "./Components/Info";
import Project from "./Components/Project";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center bg-blue-100 dark:bg-gray-800 text-black dark:text-white px-8">
        <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-4">
          This is a simple portfolio website built with Next.js and Tailwind
          CSS.
        </p>
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
