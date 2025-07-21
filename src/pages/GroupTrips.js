import { useState } from "react";
import {
  Users,
  MapPin,
  Calendar,
  Star,
  Search,
  Heart,
  Globe,
  Camera,
  Mountain,
  Waves,
} from "lucide-react";

const GroupTrips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedTrips, setLikedTrips] = useState(new Set());

  const categories = [
    { id: "all", name: "All Trips", icon: <Globe className="w-4 h-4" /> },
    {
      id: "adventure",
      name: "Adventure",
      icon: <Mountain className="w-4 h-4" />,
    },
    {
      id: "beach",
      name: "Beach & Resort",
      icon: <Waves className="w-4 h-4" />,
    },
    { id: "cultural", name: "Cultural", icon: <Camera className="w-4 h-4" /> },
    {
      id: "events",
      name: "Events & Tours",
      icon: <Calendar className="w-4 h-4" />,
    },
  ];

  const sampleTrips = [
    {
      id: 1,
      title: "Bali Adventure Group",
      destination: "Bali, Indonesia",
      dates: "Aug 15-25, 2025",
      spots: { available: 3, total: 8 },
      price: "$1,299",
      organizer: "Sarah Chen",
      rating: 4.8,
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
      description:
        "Explore temples, rice terraces, and pristine beaches with fellow adventurers.",
      highlights: [
        "Temple hopping",
        "Volcano hiking",
        "Beach relaxation",
        "Local cuisine",
      ],
    },
    {
      id: 2,
      title: "Japan Cherry Blossom Tour",
      destination: "Tokyo & Kyoto, Japan",
      dates: "Mar 20-30, 2025",
      spots: { available: 7, total: 12 },
      price: "$2,899",
      organizer: "Mike Johnson",
      rating: 4.9,
      category: "cultural",
      image:
        "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=250&fit=crop",
      description:
        "Experience the magical cherry blossom season in Japan's most beautiful cities.",
      highlights: [
        "Cherry blossom viewing",
        "Traditional temples",
        "Authentic cuisine",
        "Cultural immersion",
      ],
    },
    {
      id: 3,
      title: "Coachella Music Festival",
      destination: "Palm Springs, CA",
      dates: "Apr 11-13, 2025",
      spots: { available: 6, total: 10 },
      price: "$899",
      organizer: "Alex Rivera",
      rating: 4.7,
      category: "events",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      description:
        "Join music lovers for the ultimate festival experience with shared accommodation.",
      highlights: [
        "VIP tickets",
        "Shared villa",
        "Group activities",
        "Meet artists",
      ],
    },
    {
      id: 4,
      title: "Greek Island Hopping",
      destination: "Santorini & Mykonos",
      dates: "Jun 5-15, 2025",
      spots: { available: 4, total: 6 },
      price: "$1,699",
      organizer: "Elena Papadopoulos",
      rating: 4.8,
      category: "beach",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=250&fit=crop",
      description:
        "Discover the stunning Greek islands with crystal blue waters and white architecture.",
      highlights: [
        "Island hopping",
        "Sunset views",
        "Local tavernas",
        "Historical sites",
      ],
    },
    {
      id: 5,
      title: "Patagonia Hiking Expedition",
      destination: "Torres del Paine, Chile",
      dates: "Oct 1-14, 2025",
      spots: { available: 5, total: 8 },
      price: "$2,199",
      organizer: "Carlos Mendoza",
      rating: 4.9,
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=250&fit=crop",
      description:
        "Challenge yourself with breathtaking hikes through Patagonian landscapes.",
      highlights: [
        "Multi-day treks",
        "Wildlife viewing",
        "Glacier visits",
        "Camping under stars",
      ],
    },
    {
      id: 6,
      title: "Morocco Desert & Cities",
      destination: "Marrakech & Sahara",
      dates: "Nov 10-20, 2025",
      spots: { available: 7, total: 10 },
      price: "$1,599",
      organizer: "Fatima Al-Rashid",
      rating: 4.6,
      category: "cultural",
      image: "https://picsum.photos/400/250?random=6",
      description:
        "Experience the magic of Morocco from bustling souks to peaceful desert dunes.",
      highlights: [
        "Camel trekking",
        "Desert camping",
        "Local markets",
        "Traditional cuisine",
      ],
    },
  ];

  const filteredTrips = sampleTrips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || trip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (tripId) => {
    const newLiked = new Set(likedTrips);
    if (newLiked.has(tripId)) {
      newLiked.delete(tripId);
    } else {
      newLiked.add(tripId);
    }
    setLikedTrips(newLiked);
  };

  const TripCard = ({ trip }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => toggleLike(trip.id)}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              likedTrips.has(trip.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }`}
          />
        </button>
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {trip.spots.available} spots left
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{trip.title}</h3>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{trip.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{trip.destination}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="text-sm">{trip.dates}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{trip.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {trip.highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-sm text-gray-500">Organized by</p>
            <p className="font-medium text-gray-900">{trip.organizer}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">{trip.price}</p>
            <p className="text-sm text-gray-500">per person</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">
              {trip.spots.available}/{trip.spots.total} spots
            </span>
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((trip.spots.total - trip.spots.available) /
                    trip.spots.total) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 mt-4">
          Join This Trip
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations, trips, or organizers..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {filteredTrips.length}
            </div>
            <div className="text-sm text-gray-600">Available Trips</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600">156</div>
            <div className="text-sm text-gray-600">Active Travelers</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600">23</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600">4.8</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        {filteredTrips.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">
              No trips found matching your criteria
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupTrips;
