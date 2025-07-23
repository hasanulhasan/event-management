/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
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
              href="/exploreEvents"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Explore Events
            </a>
            <a
              href="/HostEvent"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Host an Event
            </a>
            <a
              href="/EventMoments"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Event Moments
            </a>
            <a
              href="/GroupTrips"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Group Trips
            </a>
            <a
              href="/BlogTravelTips"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog & Travel Tips
            </a>
            <Link
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
            </a>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
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
              href="/Destinations"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Destinations
            </a>
            <a
              href="/GroupTrips"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Group Trips
            </a>
            <a
              href="/BlogTravelTips"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Blog & Travel Tips
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="/support"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Support
            </a>
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
