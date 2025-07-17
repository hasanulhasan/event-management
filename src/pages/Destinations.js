import React, { useState } from 'react';
import { Search, MapPin, Calendar, Hotel, Star, Clock, DollarSign, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DestinationExplorer = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [filters, setFilters] = useState({
    eventType: 'all',
    priceRange: 'all',
    dates: 'all'
  });

  const destinations = [
    {
      id: 1,
      city: 'New York City',
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
      events: [
        { name: 'Broadway Week', type: 'Theater', date: '2025-01-15', price: '$75-150' },
        { name: 'Winter Jazz Festival', type: 'Music', date: '2025-02-10', price: '$45-85' },
        { name: 'Fashion Week', type: 'Fashion', date: '2025-02-20', price: '$200-500' }
      ],
      hotels: [
        { name: 'The Plaza Hotel', rating: 5, price: '$450', distance: '0.2 miles from Times Square' },
        { name: 'Pod Hotels', rating: 4, price: '$180', distance: '0.5 miles from Central Park' },
        { name: 'The High Line Hotel', rating: 4, price: '$280', distance: '0.3 miles from Chelsea Market' }
      ],
      travelInfo: {
        airport: 'JFK/LGA/EWR',
        transit: 'Extensive subway system',
        weather: 'Cold winters, hot summers',
        currency: 'USD'
      }
    },
    {
      id: 2,
      city: 'Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      events: [
        { name: 'Cherry Blossom Festival', type: 'Cultural', date: '2025-04-01', price: 'Free' },
        { name: 'Tokyo Game Show', type: 'Gaming', date: '2025-09-15', price: '$25-60' },
        { name: 'Sumida River Fireworks', type: 'Festival', date: '2025-07-25', price: 'Free' }
      ],
      hotels: [
        { name: 'Park Hyatt Tokyo', rating: 5, price: '$520', distance: '0.1 miles from Shinjuku' },
        { name: 'Capsule Hotel Shinjuku', rating: 3, price: '$45', distance: '0.2 miles from JR Station' },
        { name: 'Hotel Gracery Shinjuku', rating: 4, price: '$220', distance: '0.1 miles from Godzilla Head' }
      ],
      travelInfo: {
        airport: 'NRT/HND',
        transit: 'JR Pass recommended',
        weather: 'Four distinct seasons',
        currency: 'JPY'
      }
    },
    {
      id: 3,
      city: 'London',
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
      events: [
        { name: 'West End Shows', type: 'Theater', date: 'Year-round', price: '$35-120' },
        { name: 'Notting Hill Carnival', type: 'Cultural', date: '2025-08-24', price: 'Free' },
        { name: 'London Fashion Week', type: 'Fashion', date: '2025-02-14', price: '$100-300' }
      ],
      hotels: [
        { name: 'The Savoy', rating: 5, price: '$480', distance: '0.3 miles from Covent Garden' },
        { name: 'Premier Inn', rating: 4, price: '$95', distance: '0.5 miles from London Bridge' },
        { name: 'The Shard Hotel', rating: 5, price: '$380', distance: '0.1 miles from Borough Market' }
      ],
      travelInfo: {
        airport: 'LHR/LGW/STN',
        transit: 'Oyster Card for Tube/Bus',
        weather: 'Mild, often rainy',
        currency: 'GBP'
      }
    },
    {
      id: 4,
      city: 'Barcelona',
      country: 'Spain',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop',
      events: [
        { name: 'Primavera Sound', type: 'Music', date: '2025-06-05', price: '$180-320' },
        { name: 'La Mercè Festival', type: 'Cultural', date: '2025-09-20', price: 'Free' },
        { name: 'Mobile World Congress', type: 'Tech', date: '2025-02-24', price: '$800-1200' }
      ],
      hotels: [
        { name: 'Hotel Casa Fuster', rating: 5, price: '$280', distance: '0.2 miles from Gràcia' },
        { name: 'Generator Barcelona', rating: 4, price: '$75', distance: '0.3 miles from Sagrada Familia' },
        { name: 'W Barcelona', rating: 5, price: '$420', distance: '0.1 miles from Beach' }
      ],
      travelInfo: {
        airport: 'BCN',
        transit: 'Metro and excellent walkability',
        weather: 'Mediterranean climate',
        currency: 'EUR'
      }
    },
    {
      id: 5,
      city: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=400&h=300&fit=crop',
      events: [
        { name: 'Paris Fashion Week', type: 'Fashion', date: '2025-03-01', price: '$150-400' },
        { name: 'Fête de la Musique', type: 'Music', date: '2025-06-21', price: 'Free' },
        { name: 'Nuit Blanche', type: 'Art', date: '2025-10-04', price: 'Free' }
      ],
      hotels: [
        { name: 'The Ritz Paris', rating: 5, price: '$650', distance: '0.1 miles from Place Vendôme' },
        { name: 'Hotel des Grands Boulevards', rating: 4, price: '$180', distance: '0.2 miles from Opera' },
        { name: 'MIJE Hostels', rating: 3, price: '$35', distance: '0.3 miles from Marais' }
      ],
      travelInfo: {
        airport: 'CDG/ORY',
        transit: 'Metro and RER system',
        weather: 'Temperate oceanic climate',
        currency: 'EUR'
      }
    },
    {
      id: 6,
      city: 'Dubai',
      country: 'UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      events: [
        { name: 'Dubai Shopping Festival', type: 'Shopping', date: '2025-01-10', price: 'Free entry' },
        { name: 'Art Dubai', type: 'Art', date: '2025-03-15', price: '$25-50' },
        { name: 'Dubai Food Festival', type: 'Food', date: '2025-02-28', price: 'Varies' }
      ],
      hotels: [
        { name: 'Burj Al Arab', rating: 5, price: '$1200', distance: '0.1 miles from Jumeirah Beach' },
        { name: 'Atlantis The Palm', rating: 5, price: '$380', distance: '0.2 miles from Palm Jumeirah' },
        { name: 'Rove Downtown', rating: 4, price: '$120', distance: '0.3 miles from Dubai Mall' }
      ],
      travelInfo: {
        airport: 'DXB',
        transit: 'Metro and taxi',
        weather: 'Desert climate, hot summers',
        currency: 'AED'
      }
    },
    {
      id: 7,
      city: 'Singapore',
      country: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop',
      events: [
        { name: 'Singapore Grand Prix', type: 'Sports', date: '2025-09-14', price: '$80-500' },
        { name: 'Singapore Food Festival', type: 'Food', date: '2025-07-15', price: '$10-30' },
        { name: 'Chinese New Year', type: 'Cultural', date: '2025-01-29', price: 'Free' }
      ],
      hotels: [
        { name: 'Marina Bay Sands', rating: 5, price: '$320', distance: '0.1 miles from Gardens by the Bay' },
        { name: 'Raffles Singapore', rating: 5, price: '$450', distance: '0.2 miles from City Hall' },
        { name: 'Pod Boutique Capsule Hotel', rating: 4, price: '$65', distance: '0.3 miles from Chinatown' }
      ],
      travelInfo: {
        airport: 'SIN',
        transit: 'Excellent MRT system',
        weather: 'Tropical climate',
        currency: 'SGD'
      }
    },
    {
      id: 8,
      city: 'Sydney',
      country: 'Australia',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop',
      events: [
        { name: 'Sydney Festival', type: 'Arts', date: '2025-01-08', price: '$25-150' },
        { name: 'Vivid Sydney', type: 'Light', date: '2025-05-24', price: 'Free' },
        { name: 'Sydney Film Festival', type: 'Film', date: '2025-06-05', price: '$18-35' }
      ],
      hotels: [
        { name: 'Park Hyatt Sydney', rating: 5, price: '$480', distance: '0.1 miles from Circular Quay' },
        { name: 'The Langham Sydney', rating: 5, price: '$320', distance: '0.2 miles from The Rocks' },
        { name: 'YHA Sydney Harbour', rating: 3, price: '$45', distance: '0.3 miles from Opera House' }
      ],
      travelInfo: {
        airport: 'SYD',
        transit: 'Trains, buses, and ferries',
        weather: 'Temperate oceanic climate',
        currency: 'AUD'
      }
    },
    {
      id: 9,
      city: 'Rio de Janeiro',
      country: 'Brazil',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop',
      events: [
        { name: 'Carnival', type: 'Festival', date: '2025-02-28', price: '$50-300' },
        { name: 'Rock in Rio', type: 'Music', date: '2025-09-15', price: '$80-200' },
        { name: 'New Year at Copacabana', type: 'Festival', date: '2025-12-31', price: 'Free' }
      ],
      hotels: [
        { name: 'Copacabana Palace', rating: 5, price: '$380', distance: '0.1 miles from Copacabana Beach' },
        { name: 'Hotel Fasano Rio', rating: 5, price: '$420', distance: '0.2 miles from Ipanema' },
        { name: 'Selina Lapa Rio', rating: 4, price: '$65', distance: '0.3 miles from Lapa' }
      ],
      travelInfo: {
        airport: 'GIG',
        transit: 'Metro and bus system',
        weather: 'Tropical climate',
        currency: 'BRL'
      }
    },
    {
      id: 10,
      city: 'Amsterdam',
      country: 'Netherlands',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop',
      events: [
        { name: 'King\'s Day', type: 'Cultural', date: '2025-04-27', price: 'Free' },
        { name: 'Amsterdam Dance Event', type: 'Music', date: '2025-10-15', price: '$40-150' },
        { name: 'Keukenhof Gardens', type: 'Nature', date: '2025-03-20', price: '$20' }
      ],
      hotels: [
        { name: 'Waldorf Astoria Amsterdam', rating: 5, price: '$520', distance: '0.2 miles from Herengracht' },
        { name: 'Lloyd Hotel', rating: 4, price: '$150', distance: '0.3 miles from Eastern Docklands' },
        { name: 'ClinkNOORD', rating: 3, price: '$35', distance: '0.4 miles from Central Station' }
      ],
      travelInfo: {
        airport: 'AMS',
        transit: 'Bikes, trams, and metro',
        weather: 'Oceanic climate',
        currency: 'EUR'
      }
    },
    {
      id: 11,
      city: 'Istanbul',
      country: 'Turkey',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&h=300&fit=crop',
      events: [
        { name: 'Istanbul Music Festival', type: 'Music', date: '2025-06-10', price: '$30-80' },
        { name: 'Istanbul Biennial', type: 'Art', date: '2025-09-16', price: '$15-25' },
        { name: 'Ramadan Festival', type: 'Cultural', date: '2025-03-10', price: 'Free' }
      ],
      hotels: [
        { name: 'Four Seasons Sultanahmet', rating: 5, price: '$350', distance: '0.1 miles from Hagia Sophia' },
        { name: 'Pera Palace Hotel', rating: 5, price: '$280', distance: '0.2 miles from Galata Tower' },
        { name: 'Cheers Hostel', rating: 4, price: '$25', distance: '0.3 miles from Blue Mosque' }
      ],
      travelInfo: {
        airport: 'IST',
        transit: 'Metro, trams, and ferries',
        weather: 'Mediterranean climate',
        currency: 'TRY'
      }
    },
    {
      id: 12,
      city: 'Bangkok',
      country: 'Thailand',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=300&fit=crop',
      events: [
        { name: 'Songkran Festival', type: 'Cultural', date: '2025-04-13', price: 'Free' },
        { name: 'Loy Krathong', type: 'Festival', date: '2025-11-05', price: 'Free' },
        { name: 'Bangkok International Film Festival', type: 'Film', date: '2025-07-25', price: '$8-20' }
      ],
      hotels: [
        { name: 'Mandarin Oriental Bangkok', rating: 5, price: '$280', distance: '0.1 miles from Chao Phraya River' },
        { name: 'Lebua at State Tower', rating: 5, price: '$220', distance: '0.2 miles from Saphan Taksin' },
        { name: 'Lub d Bangkok Silom', rating: 4, price: '$20', distance: '0.3 miles from Silom Road' }
      ],
      travelInfo: {
        airport: 'BKK/DMK',
        transit: 'BTS Skytrain and MRT',
        weather: 'Tropical climate',
        currency: 'THB'
      }
    },
    {
      id: 13,
      city: 'Berlin',
      country: 'Germany',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&h=300&fit=crop',
      events: [
        { name: 'Berlinale Film Festival', type: 'Film', date: '2025-02-13', price: '$12-25' },
        { name: 'Love Parade', type: 'Music', date: '2025-07-12', price: 'Free' },
        { name: 'Festival of Lights', type: 'Light', date: '2025-10-10', price: 'Free' }
      ],
      hotels: [
        { name: 'Hotel Adlon Kempinski', rating: 5, price: '$420', distance: '0.1 miles from Brandenburg Gate' },
        { name: 'Circus Hotel', rating: 4, price: '$130', distance: '0.2 miles from Hackescher Markt' },
        { name: 'Meininger Hotel Berlin', rating: 3, price: '$35', distance: '0.3 miles from Potsdamer Platz' }
      ],
      travelInfo: {
        airport: 'BER',
        transit: 'U-Bahn and S-Bahn',
        weather: 'Temperate oceanic climate',
        currency: 'EUR'
      }
    },
    {
      id: 14,
      city: 'Mumbai',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop',
      events: [
        { name: 'Mumbai Film Festival', type: 'Film', date: '2025-10-17', price: '$5-15' },
        { name: 'Ganesh Chaturthi', type: 'Cultural', date: '2025-08-29', price: 'Free' },
        { name: 'Kala Ghoda Arts Festival', type: 'Arts', date: '2025-02-01', price: 'Free' }
      ],
      hotels: [
        { name: 'The Taj Mahal Palace', rating: 5, price: '$180', distance: '0.1 miles from Gateway of India' },
        { name: 'The Oberoi Mumbai', rating: 5, price: '$220', distance: '0.2 miles from Nariman Point' },
        { name: 'Zostel Mumbai', rating: 4, price: '$12', distance: '0.3 miles from Colaba' }
      ],
      travelInfo: {
        airport: 'BOM',
        transit: 'Local trains and buses',
        weather: 'Tropical climate',
        currency: 'INR'
      }
    },
    {
      id: 15,
      city: 'Cape Town',
      country: 'South Africa',
      image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=300&fit=crop',
      events: [
        { name: 'Cape Town International Jazz Festival', type: 'Music', date: '2025-03-28', price: '$40-120' },
        { name: 'Cape Town Carnival', type: 'Festival', date: '2025-03-15', price: 'Free' },
        { name: 'Design Indaba', type: 'Design', date: '2025-02-26', price: '$80-200' }
      ],
      hotels: [
        { name: 'The Silo Hotel', rating: 5, price: '$320', distance: '0.1 miles from V&A Waterfront' },
        { name: 'Belmond Mount Nelson', rating: 5, price: '$280', distance: '0.2 miles from Company\'s Garden' },
        { name: 'Once in Cape Town', rating: 4, price: '$45', distance: '0.3 miles from Long Street' }
      ],
      travelInfo: {
        airport: 'CPT',
        transit: 'MyCiTi bus and taxis',
        weather: 'Mediterranean climate',
        currency: 'ZAR'
      }
    }
  ];

  const filteredDestinations = destinations.filter(dest => 
    dest.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.events.some(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getEventTypeColor = (type) => {
    const colors = {
      'Music': 'bg-purple-100 text-purple-800',
      'Theater': 'bg-red-100 text-red-800',
      'Cultural': 'bg-blue-100 text-blue-800',
      'Fashion': 'bg-pink-100 text-pink-800',
      'Gaming': 'bg-green-100 text-green-800',
      'Festival': 'bg-orange-100 text-orange-800',
      'Tech': 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  const DestinationCard = ({ destination }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={destination.image} alt={destination.city} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{destination.city}</h3>
          <span className="text-sm text-gray-500">{destination.country}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{destination.events.length} upcoming events</span>
        </div>
        <button 
          onClick={() => setSelectedDestination(destination)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Details
        </button>
      </div>
    </div>
  );

  const EventsList = ({ events }) => (
    <div className="space-y-3">
      {events.map((event, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{event.name}</h4>
            <span className={`px-2 py-1 text-xs rounded-full ${getEventTypeColor(event.type)}`}>
              {event.type}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{event.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const HotelsList = ({ hotels }) => (
    <div className="space-y-3">
      {hotels.map((hotel, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{hotel.name}</h4>
            <div className="flex items-center">
              {renderStars(hotel.rating)}
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{hotel.price}/night</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{hotel.distance}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const TravelInfo = ({ info }) => (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Getting There</h4>
          <p className="text-sm text-gray-600 mb-1"><strong>Airport:</strong> {info.airport}</p>
          <p className="text-sm text-gray-600"><strong>Transit:</strong> {info.transit}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Know Before You Go</h4>
          <p className="text-sm text-gray-600 mb-1"><strong>Weather:</strong> {info.weather}</p>
          <p className="text-sm text-gray-600"><strong>Currency:</strong> {info.currency}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Destination Explorer</h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations, cities, or events..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {selectedDestination ? (
          <div>
            {/* Back Button */}
            <button
              onClick={() => setSelectedDestination(null)}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
            >
              ← Back to destinations
            </button>

            {/* Destination Header */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img 
                src={selectedDestination.image} 
                alt={selectedDestination.city} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedDestination.city}, {selectedDestination.country}
                </h2>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <nav className="flex space-x-8">
                {['events', 'hotels', 'travel'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab === 'events' && <Calendar className="w-4 h-4 inline mr-2" />}
                    {tab === 'hotels' && <Hotel className="w-4 h-4 inline mr-2" />}
                    {tab === 'travel' && <MapPin className="w-4 h-4 inline mr-2" />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'events' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                  <EventsList events={selectedDestination.events} />
                </div>
              )}
              {activeTab === 'hotels' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Hotels</h3>
                  <HotelsList hotels={selectedDestination.hotels} />
                </div>
              )}
              {activeTab === 'travel' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Travel Information</h3>
                  <TravelInfo info={selectedDestination.travelInfo} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DestinationExplorer;