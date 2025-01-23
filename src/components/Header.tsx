import { Link } from "react-router-dom";
// import { Moon ,SunMoon} from 'lucide-react';

// export const Header = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // Initialize dark mode from localStorage
//   useEffect(() => {
//     const savedMode = localStorage.getItem("darkMode") === "true";
//     setDarkMode(savedMode);
//     document.documentElement.classList.toggle("dark", savedMode);
//   }, []);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     console.log("New dark mode:", newMode); // Debugging
//     setDarkMode(newMode);
//     localStorage.setItem("darkMode", newMode.toString());
//     document.documentElement.classList.toggle("dark", newMode);
//   };
  

//   // Toggle navbar menu
//   const toggleNavbar = () => setIsOpen(!isOpen);

//   // Close navbar menu
//   const closeNavbar = () => setIsOpen(false);

//   return (
//     <nav className="bg-slate-400 dark:bg-gray-800 text-white p-4 rounded-sm">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Website Logo */}
//         <h1 className="text-xl font-bold">Abdelrahman Yasser</h1>

//         {/* Mobile Navigation Menu */}
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } absolute top-16 left-0 w-full bg-slate-400 dark:bg-gray-800 text-center py-4 rounded-md md:static md:flex md:items-center md:w-auto md:space-x-4 md:py-0 `}
//         >
//           <a
//             href="#about"
//             onClick={closeNavbar}
//             className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
//           >
//             About
//           </a>
//           <a
//             href="#projects"
//             onClick={closeNavbar}
//             className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
//           >
//             Projects
//           </a>
//           <a
//             href="#skills"
//             onClick={closeNavbar}
//             className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
//           >
//             Skills
//           </a>
//           <a
//             href="#contact"
//             onClick={closeNavbar}
//             className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
//           >
//             Contact
//           </a>
  
//         </div>

//         {/* Dark Mode Toggle */}

//   {/* <button
//       onClick={toggleDarkMode}
//       className="
//         ml-4 h-7 w-12 bg-slate-100 text-white py-1 px-4 rounded-xl 
//         dark:bg-gray-900 border dark:hover:border-gray-300 
//         flex items-center relative transition-all duration-500 ease-in-out"
//       aria-label="Toggle Dark Mode"
//     >
//       {darkMode ? (
//         // Moon Icon for Dark Mode
//         <Moon
//           className="bg-slate-700 rounded-full p-1 dark:absolute right-1"
//           size={22}
//         />
//       ) : (
//         // Sun Icon for Light Mode
//         <SunMoon

//           className="rounded-full bg-slate-300 p-1 absolute text-black left-1"
//           size={22}
//         />
//       )}
//     </button> */}
//       <label className="relative inline-block w-16 h-8"   onClick={toggleDarkMode}>
//       <input
//         id="input"
//         type="checkbox"
//         className="absolute opacity-0 w-0 h-0"
//         defaultChecked={true} // Use defaultChecked for controlled inputs
//       />
//       <div className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-blue-500 transition-all duration-400 overflow-hidden rounded-full">
//         <div className="absolute w-6 h-6 bg-yellow-500 bottom-1 left-1 transition-transform duration-400 transform rounded-full">
//           {/* Moon Dots */}
//           <svg
//             id="moon-dot-1"
//             className="absolute w-1.5 h-1.5 left-2.5 top-0.75"
//             viewBox="0 0 100 100"
//           >
//             <circle cx="50" cy="50" r="50" fill="gray" />
//           </svg>
//           <svg
//             id="moon-dot-2"
//             className="absolute w-2.5 h-2.5 left-0.5 top-2.5"
//             viewBox="0 0 100 100"
//           >
//             <circle cx="50" cy="50" r="50" fill="gray" />
//           </svg>
//           <svg
//             id="moon-dot-3"
//             className="absolute w-0.75 h-0.75 left-4 top-4.5"
//             viewBox="0 0 100 100"
//           >
//             <circle cx="50" cy="50" r="50" fill="gray" />
//           </svg>
//         </div>
//         {/* Stars */}
//         <div className="transform -translate-y-8 opacity-0 transition-opacity duration-400">
//           <svg
//             id="star-1"
//             className="absolute w-5 top-0.5 left-0.75 animate-twinkle"
//             viewBox="0 0 20 20"
//           >
//             <path
//               d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
//               fill="white"
//             />
//           </svg>
//           <svg
//             id="star-2"
//             className="absolute w-1.5 top-4 left-0.75"
//             viewBox="0 0 20 20"
//           >
//             <path
//               d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
//               fill="white"
//             />
//           </svg>
//           <svg
//             id="star-3"
//             className="absolute w-3 top-5 left-2.5 animate-twinkle"
//             viewBox="0 0 20 20"
//           >
//             <path
//               d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
//               fill="white"
//             />
//           </svg>
//           <svg
//             id="star-4"
//             className="absolute w-4.5 top-0 left-4 animate-twinkle"
//             viewBox="0 0 20 20"
//           >
//             <path
//               d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
//               fill="white"
//             />
//           </svg>
//         </div>
//       </div>
//     </label>
//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={toggleNavbar}
//           className="text-white md:hidden ml-4"
//           aria-label="Toggle Navigation"
//         >
//           {isOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </nav>
//   );
// };
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

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
        <h1 className="text-xl font-bold">As Coding</h1>

        {/* Mobile Navigation Menu */}
        <div
  className={`${
    isOpen ? "block" : "hidden"
  } absolute top-16 left-0 w-full bg-slate-400 dark:bg-gray-800 text-center py-4 rounded-md md:static md:flex md:items-center md:w-auto md:space-x-4 md:py-0`}
>
  <Link
    to="/hero"
    onClick={closeNavbar}
    className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
  >
    About
  </Link>
  <Link
    to="/projects"
    onClick={closeNavbar}
    className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
  >
    Projects
  </Link>
  <Link
    to="/skills"
    onClick={closeNavbar}
    className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
  >
    Skills
  </Link>
  <Link
    to="/contact"
    onClick={closeNavbar}
    className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
  >
    Contact
  </Link>
  <Link
    to="/post"
    onClick={closeNavbar}
    className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors py-1"
  >
    Posts
  </Link>
</div>


        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 h-9 w-12 bg-slate-100 text-white py-1 px-4 rounded-md dark:bg-gray-900 border dark:hover:border-gray-300 flex items-center justify-center transition-all duration-500 ease-in-out"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Moon size={22} className="text-yellow-500" />
          ) : (
            <Sun size={22} className="text-black" />
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleNavbar}
          className="text-white md:hidden ml-4"
          aria-label="Toggle Navigation"
          type="button"
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
