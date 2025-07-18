/* eslint-disable jsx-a11y/anchor-is-valid */
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/">
            <div className="flex items-center">
              <img src="/Break-Buddy-1.png" alt="Logo" className="h-[180px] w-[200px] mt-3" />
            </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/Destinations" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="/GroupTrips" className="text-gray-700 hover:text-blue-600 transition-colors">Group Trips</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Hotels</a>
              <a href="/BlogTravelTips" className="text-gray-700 hover:text-blue-600 transition-colors">Blog & Travel Tips</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Link to="/Login">Sign In</Link>
                
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Destinations</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Flights</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Hotels</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tours</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}
