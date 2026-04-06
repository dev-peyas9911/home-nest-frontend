import { useNavigate } from "react-router";
import { FaHome, FaArrowLeft, FaGhost } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-6 py-24 transition-colors duration-300">
      <div className="text-center">
        {/* Animated Icon Section */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-gray-100 dark:text-gray-900 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaGhost className="text-6xl text-blue-600 animate-bounce" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
          Oops! You're Lost.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10 text-lg">
          The property page you are looking for has been moved, deleted, or
          never existed in our neighborhood.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all active:scale-95"
          >
            <FaArrowLeft />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all active:scale-95"
          >
            <FaHome />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
