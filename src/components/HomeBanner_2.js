import { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function HomeBanner_2() {
  const [searchType, setSearchType] = useState('flights');
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black/30"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop')"
              }}
            ></div>
            
            <div className="relative z-10 text-center max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
                Explore the World
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Discover amazing destinations and create unforgettable memories
              </p>
              
              {/* Search Bar */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-4 mb-4">
                  <button 
                    onClick={() => setSearchType('flights')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      searchType === 'flights' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Flights
                  </button>
                  <button 
                    onClick={() => setSearchType('hotels')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      searchType === 'hotels' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Hotels
                  </button>
                  <button 
                    onClick={() => setSearchType('packages')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      searchType === 'packages' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Packages
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="From"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="To"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input 
                      type="date" 
                      className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  <Search className="inline-block w-5 h-5 mr-2" />
                  Search Now
                </button>
              </div>
            </div>
          </section>
  )
}
