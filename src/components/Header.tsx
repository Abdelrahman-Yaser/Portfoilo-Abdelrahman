
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Moon,
  Sun,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

type NavLink =
  | { name: string; type: "anchor"; href: string }
  | { name: string; type: "route"; href: string };

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks: NavLink[] = [
    { name: "About", type: "anchor", href: "#hero" },
    { name: "Projects", type: "anchor", href: "#projects" },
    { name: "Skills", type: "anchor", href: "#skills" },
    { name: "Contact", type: "anchor", href: "#contact" },
    { name: "Blog", type: "route", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    const savedMode = localStorage.getItem("darkMode");
    const isDark = savedMode === null ? true : savedMode === "true";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    document.documentElement.classList.toggle("dark", newMode);
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 90;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const id = href.replace("#", "");

    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollToId(id);
      }, 150);

      return;
    }

    scrollToId(id);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${
          scrolled
            ? "py-3"
            : "py-5"
        }
      `}
    >
      <nav
        className={`
          mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
          transition-all duration-500
          ${
            scrolled
              ? "max-w-6xl"
              : ""
          }
        `}
      >
        <div
          className={`
            flex items-center justify-between
            px-4 sm:px-5
            rounded-2xl
            border
            transition-all duration-500
            ${
              scrolled
                ? `
                  bg-white/80
                  dark:bg-black/70
                  backdrop-blur-2xl
                  border-gray-200/70
                  dark:border-white/10
                  shadow-xl shadow-black/5
                `
                : `
                  bg-white/40
                  dark:bg-black/20
                  backdrop-blur-xl
                  border-white/20
                  dark:border-white/5
                `
            }
          `}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="group flex items-center gap-3 py-3"
          >
            {/* Logo mark */}
            <div
              className="
                relative flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-indigo-500
                via-purple-500
                to-pink-500
                text-white
                font-black
                tracking-tighter
                shadow-lg
                shadow-indigo-500/20
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              AY
            </div>

            {/* Name */}
            <div className="hidden sm:block leading-none">
              <div className="text-sm font-bold text-gray-900 dark:text-white">
                Abdelrahman
              </div>

              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div
              className="
                flex items-center
                rounded-xl
                bg-gray-100/60
                dark:bg-white/[0.04]
                border
                border-gray-200/50
                dark:border-white/5
                p-1
              "
            >
              {navLinks.map((link) => {
                const active =
                  link.type === "route" &&
                  isActiveRoute(link.href);

                const classes = `
                  relative
                  px-4 py-2
                  text-sm
                  font-medium
                  rounded-lg
                  transition-all duration-300
                  ${
                    active
                      ? `
                        text-gray-900
                        dark:text-white
                        bg-white
                        dark:bg-white/10
                        shadow-sm
                      `
                      : `
                        text-gray-500
                        dark:text-gray-400
                        hover:text-gray-900
                        dark:hover:text-white
                        hover:bg-white/60
                        dark:hover:bg-white/5
                      `
                  }
                `;

                if (link.type === "route") {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={classes}
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      scrollToSection(e, link.href)
                    }
                    className={classes}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mx-2 h-7 w-px bg-gray-200 dark:bg-white/10" />

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                group
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border
                border-gray-200
                dark:border-white/10
                bg-white
                dark:bg-white/5
                transition-all duration-300
                hover:scale-105
                hover:border-indigo-500/30
              "
            >
              {darkMode ? (
                <Sun
                  size={17}
                  className="
                    text-yellow-400
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              ) : (
                <Moon
                  size={17}
                  className="
                    text-indigo-600
                    transition-transform
                    duration-300
                    group-hover:-rotate-12
                  "
                />
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) =>
                scrollToSection(e, "#contact")
              }
              className="
                group
                ml-1
                flex items-center gap-2
                rounded-xl
                bg-gray-900
                dark:bg-white
                px-4 py-2.5
                text-sm font-semibold
                text-white
                dark:text-black
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Let's Talk

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme */}
            <button
              onClick={toggleDarkMode}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border
                border-gray-200
                dark:border-white/10
                bg-white/70
                dark:bg-white/5
              "
            >
              {darkMode ? (
                <Sun
                  size={18}
                  className="text-yellow-400"
                />
              ) : (
                <Moon
                  size={18}
                  className="text-indigo-600"
                />
              )}
            </button>

            {/* Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={isOpen}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border
                border-gray-200
                dark:border-white/10
                text-gray-700
                dark:text-gray-200
                transition-all
                hover:bg-gray-100
                dark:hover:bg-white/5
              "
            >
              {isOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-300
            ${
              isOpen
                ? "mt-3 max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-gray-200
              dark:border-white/10
              bg-white/95
              dark:bg-black/90
              backdrop-blur-2xl
              p-3
              shadow-2xl
            "
          >
            {navLinks.map((link) => {
              const classes = `
                flex items-center justify-between
                w-full
                rounded-xl
                px-4 py-3.5
                text-sm font-medium
                text-gray-700
                dark:text-gray-300
                transition-all
                hover:bg-gray-100
                dark:hover:bg-white/5
                hover:text-indigo-600
                dark:hover:text-white
              `;

              if (link.type === "route") {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={classes}
                  >
                    {link.name}

                    <ArrowUpRight size={16} />
                  </Link>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    scrollToSection(e, link.href)
                  }
                  className={classes}
                >
                  {link.name}

                  <ArrowUpRight size={16} />
                </a>
              );
            })}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={(e) =>
                scrollToSection(e, "#contact")
              }
              className="
                mt-2
                flex items-center justify-center gap-2
                rounded-xl
                bg-gray-900
                dark:bg-white
                px-4 py-3.5
                text-sm font-semibold
                text-white
                dark:text-black
              "
            >
              Let's Talk

              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
