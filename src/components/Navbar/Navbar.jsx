import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className={`fixed w-full top-0 z-20 transition-all duration-500 ease-in-out ${
      scrollPosition > 50 ? "bg-black/40 backdrop-blur-xl" : "bg-transparent"
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/20 to-fuchsia-900/20 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-xl bg-black/20" />
        {/* Animated border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" />
        </div>
      </div>

      <nav className="relative mx-auto max-w-7xl px-9 py-[10px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative group flex items-center">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 rounded-xl opacity-0 blur-md group-hover:opacity-100 transition-all duration-700" />
          <span className="relative text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            LOGO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center pl-36 space-x-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                relative  group px-3 py-2 transition-all duration-300
                ${isActive ? 'text-purple-400' : 'text-gray-300'}
              `}
              onMouseEnter={() => setActiveTab(link.path)}
              onMouseLeave={() => setActiveTab("/")}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className="relative group px-3 py-2"
          >
            <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
              Sign In
            </span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-3xl transition-colors duration-300" />
          </Link>

          <Link
            to="/signup"
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300" />
            <div className="relative px-5 py-2 bg-black/40 rounded-2xl border border-white/10 text-white group-hover:bg-black/60 transition-all duration-300">
              Get Started
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
          <div className="relative text-gray-300 group-hover:text-white transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden absolute left-4 right-4 top-full mt-2
          transform transition-all duration-300
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-xl blur-xl" />
          <div className="relative overflow-hidden backdrop-blur-xl bg-black/60 rounded-xl border border-white/10">
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    block px-4 py-2 rounded-lg transition-all duration-300
                    ${isActive 
                      ? "text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text" 
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 space-y-2 bg-white/5">
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-white text-center rounded-lg bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 hover:from-purple-600/50 hover:to-fuchsia-600/50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}