import { FaSun, FaMoon } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
// import { useTheme } from "./ThemeProvider";
// import { useTheme } from "../context/ThemeProvider"; // Adjust path

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800
       text-blue-600 dark:text-yellow-400 transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm border border-gray-200 dark:border-gray-700"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon className="text-xl animate-in zoom-in spin-in-90 duration-300" />
      ) : (
        <FaSun className="text-xl animate-in zoom-in spin-in-180 duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
