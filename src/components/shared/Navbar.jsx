import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mock Auth State - Replace this with your Firebase Auth Context
  const user = {
    displayName: "John Doe",
    email: "john@example.com",
    photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  };

  // const user = null;

  // Updated styles to include dark mode colors
  const activeLink =
    "text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 dark:border-blue-400 pb-1";
  const normalLink =
    "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left: Logo */}
          <div className="shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold text-blue-700 dark:text-blue-500 tracking-tight"
            >
              Home<span className="text-gray-800 dark:text-gray-100">Nest</span>
            </Link>
          </div>

          {/* Middle: Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Home
            </NavLink>
            <NavLink
              to="/all-properties"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              All Properties
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/add-property"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Add Property
                </NavLink>
                <NavLink
                  to="/my-properties"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  My Properties
                </NavLink>
                <NavLink
                  to="/my-ratings"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  My Ratings
                </NavLink>
              </>
            )}
          </div>

          {/* Right: Auth / Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-5 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-blue-500 transition"
                >
                  <img
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-transparent hover:ring-blue-500 transition"
                    src={user.photoURL}
                    alt="User"
                  />
                </button>

                {/* Advanced Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl py-2 z-50 transition-all">
                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={() => console.log("Logout Logic Here")}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 pt-2 pb-6 space-y-2 shadow-inner">
          <NavLink
            to="/"
            className="block py-2 text-gray-600 dark:text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/all-properties"
            className="block py-2 text-gray-600 dark:text-gray-300"
          >
            All Properties
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-property"
                className="block py-2 text-gray-600 dark:text-gray-300"
              >
                Add Property
              </NavLink>
              <NavLink
                to="/my-properties"
                className="block py-2 text-gray-600 dark:text-gray-300"
              >
                My Properties
              </NavLink>
              <NavLink
                to="/my-ratings"
                className="block py-2 text-gray-600 dark:text-gray-300"
              >
                My Ratings
              </NavLink>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                  {user.displayName}
                </p>
                <button className="text-red-600 dark:text-red-400 text-sm mt-2">
                  Log out
                </button>
              </div>
            </>
          )}
          {!user && (
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                to="/login"
                className="text-center py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-center py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
