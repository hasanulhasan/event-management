/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem("user");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const dropdownRef = useRef(null);

  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path ? "text-blue-600 font-semibold" : "text-gray-700";


  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/">
            <div className="flex items-center ">
              <img
                src="/Break-Buddy-4.png"
                alt="Logo"
                className="h-[60px] w-[130px]"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`${isActive("/")} hover:text-blue-600 transition-colors`}
            >
              Home
            </a>
            <a
              href="/exploreEvents"
              className={`${isActive("/exploreEvents")} hover:text-blue-600 transition-colors`}
            >
              Explore Events
            </a>
            <a
              href="/HostEvent"
              className={`${isActive("/HostEvent")} hover:text-blue-600 transition-colors`}
            >
              Host an Event
            </a>
            <a
              href="/EventMoments"
              className={`${isActive("/EventMoments")} hover:text-blue-600 transition-colors`}
            >
              Event Moments
            </a>
            <a
              href="/SharedPlans"
              className={`${isActive("/SharedPlans")} hover:text-blue-600 transition-colors`}
            >
              Shared Plans
            </a>
            <div className="relative" ref={dropdownRef}>
            <span
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              My Plans
            </span>  <span className="ml-1 text-xs">▼</span>
             {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <a
                  href="/#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Active Plans
                </a>
                <a
                  href="/#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Plan History
                </a>
                <a
                  href="/#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Plan Settings
                </a>
              </div>
            )}
            </div>
           
            {/* <a
              href="/BlogTravelTips"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog & Travel Tips
            </a> */}
            {/* <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <a
              href="/support"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Support
            </a> */}
            {user && 
            (<Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>)
            }
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link to="/Login">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Sign In
                </button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="/exploreEvents"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Explore Events
            </a>
            <a
              href="/HostEvent"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Host an Event
            </a>
            <a
              href="/EventMoments"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Event Moments
            </a>
            <a
              href="/SharedPlans"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Shared Plans
            </a>
            <a
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              My Plans
            </a>
            {/* <a
              href="/BlogTravelTips"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Blog Travel Tips
            </a> */}
            <a
              href="/dashboard"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </a>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link to="/Login">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
