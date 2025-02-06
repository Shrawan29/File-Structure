import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BarChart2, Home, Package, TrendingUp, User, Settings, LogOut, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileOpen && !event.target.closest('.profile-menu')) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileOpen]);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/SalesTrends", label: "Sales Trends", icon: TrendingUp },
    { path: "/InventoryForecast", label: "Inventory Forecast", icon: Package },
    { path: "/MarketInsights", label: "Market Insights", icon: BarChart2 }
  ];

  return (
    <header className={`fixed w-full top-0 z-10 transition-all duration-500 ease-in-out ${
      scrollPosition > 50 ? "bg-black/40 backdrop-blur-xl" : "bg-transparent"
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/20 to-fuchsia-900/20 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-xl bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" />
        </div>
      </div>

      <nav className="relative mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative group flex items-center">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 rounded-xl opacity-0 blur-md group-hover:opacity-100 transition-all duration-700" />
          <span className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            VENDITE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                relative group px-4 py-2 flex items-center space-x-2 rounded-lg transition-all duration-300
                ${isActive ? 'text-purple-400 bg-white/5' : 'text-gray-300'}
              `}
            >
              <link.icon className="w-4 h-4" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300" />
            </NavLink>
          ))}
        </div>

        {/* User Profile - Desktop */}
        <div className="hidden lg:block profile-menu">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="relative group px-3 py-2 flex items-center space-x-2 rounded-lg transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-300 group-hover:text-white">John Doe</span>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300" 
              style={{ transform: profileOpen ? 'rotate(180deg)' : 'rotate(0)' }}
            />
            
            {/* Profile Dropdown */}
            <div className={`
              absolute right-0 top-full mt-2 w-48 rounded-xl overflow-hidden transform transition-all duration-300
              ${profileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-xl blur-xl" />
                <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                  <div className="p-2 space-y-1">
                    <Link to="/Profile" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300">
                      <User className="w-4 h-4" />
                      <span>View Profile</span>
                    </Link>
                    <Link to="/settings" className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <div className="h-[1px] bg-white/10 my-1" />
                    <Link to="/logout">
                    <button className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors duration-300">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative group p-2"
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
              {/* Mobile Profile Section */}
              <div className="flex items-center space-x-3 px-4 py-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white">John Doe</div>
                  <div className="text-sm text-gray-400">john@example.com</div>
                </div>
              </div>
              
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${isActive 
                      ? "text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text" 
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </NavLink>
              ))}
              
              {/* Mobile Profile Actions */}
              <div className="border-t border-white/10 mt-2 pt-2">
                <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                  <User className="w-4 h-4" />
                  <span>View Profile</span>
                </Link>
                <Link to="/settings" className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </Link>
                <button className="w-full flex items-center space-x-2 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-all duration-300">
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}