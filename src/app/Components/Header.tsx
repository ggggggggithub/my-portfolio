import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;
