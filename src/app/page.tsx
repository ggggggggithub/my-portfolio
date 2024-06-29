import Header from "./Components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </main>
    </div>
  );
}
