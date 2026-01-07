import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // مراقبة التمرير لتغيير شكل الهيدر
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  // دالة الانتقال السلس للأقسام
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // تعويض ارتفاع الهيدر
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md h-16" : "bg-transparent h-20"
    }`}>
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          As Coding
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-transform hover:scale-110">
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white text-gray-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 transition-all duration-300 border-b border-gray-200 dark:border-gray-800 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      }`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};