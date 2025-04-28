import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Name / Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-semibold text-pastel-blue dark:text-light-pastel-blue"
            >
              Putri Kiara
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="nav-link dark:text-gray-300 dark:hover:text-light-pastel-blue"
              >
                Home
              </Link>
              <Link
                to="/counter"
                className="nav-link dark:text-gray-300 dark:hover:text-light-pastel-blue"
              >
                Counter Demo
              </Link>
              <a
                href="#about"
                className="nav-link dark:text-gray-300 dark:hover:text-light-pastel-blue"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="nav-link dark:text-gray-300 dark:hover:text-light-pastel-blue"
              >
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-pastel-blue dark:text-gray-400 dark:hover:text-light-pastel-blue transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pastel-blue dark:text-gray-300 dark:hover:text-light-pastel-blue hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/counter"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pastel-blue dark:text-gray-300 dark:hover:text-light-pastel-blue hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Counter Demo
          </Link>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pastel-blue dark:text-gray-300 dark:hover:text-light-pastel-blue hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pastel-blue dark:text-gray-300 dark:hover:text-light-pastel-blue hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
