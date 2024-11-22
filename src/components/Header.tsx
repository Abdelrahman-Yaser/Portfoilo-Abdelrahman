import { useEffect, useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    console.log("New dark mode:", newMode); // Debugging
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };
  

  // Toggle navbar menu
  const toggleNavbar = () => setIsOpen(!isOpen);

  // Close navbar menu
  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="bg-slate-400 dark:bg-gray-800 text-white p-4 rounded-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Logo */}
        <h1 className="text-xl font-bold">Abdelrahman Yasser</h1>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-slate-400 dark:bg-gray-800 text-center py-4 rounded-md md:static md:flex md:items-center md:w-auto md:space-x-4 md:py-0 `}
        >
          <a
            href="#about"
            onClick={closeNavbar}
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeNavbar}
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={closeNavbar}
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={closeNavbar}
            className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
          >
            Contact
          </a>
  
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 bg-red-600 text-white py-1 px-4 rounded hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 flex items-center"
          aria-label="Toggle Dark Mode"
        >
  {darkMode ? (
    // Moon Icon for Dark Mode
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm6.364 3.636a1 1 0 01.707 1.707l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 01.707-.293zM20 12a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-8 8a1 1 0 01-1 1v2a1 1 0 102 0v-2a1 1 0 01-1-1zm-6.364-3.636a1 1 0 01-1.707-.707l1.414-1.414a1 1 0 111.414 1.414L5.636 16.364zm-3.636-5.364a1 1 0 01-1-1V9a1 1 0 112 0v2a1 1 0 01-1 1zM9.05 4.636a1 1 0 01.293-.707l1.414-1.414a1 1 0 111.414 1.414L10.757 4.95a1 1 0 01-1.707-.293z" />
    </svg>
  ) : (
    // Sun Icon for Light Mode
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 4.5a8 8 0 00-7.001 11.16A6.502 6.502 0 0012 4.5zM12 3a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
  )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleNavbar}
          className="text-white md:hidden ml-4"
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};
