import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Heart,
  Share2,
  Camera,
  Award,
  Globe,
} from "lucide-react";

const EventDetails = () => {
  const [selectedDate, setSelectedDate] = useState("2024-08-15");
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const tourPackages = [
    {
      id: "basic",
      name: "Basic Package",
      price: "$299",
      duration: "3 Days",
      features: [
        "Hotel Accommodation",
        "Breakfast Included",
        "Local Guide",
        "Transport",
      ],
    },
    {
      id: "standard",
      name: "Standard Package",
      price: "$499",
      duration: "5 Days",
      features: [
        "4-Star Hotel",
        "All Meals",
        "Professional Guide",
        "Premium Transport",
        "City Tour",
      ],
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "$799",
      duration: "7 Days",
      features: [
        "5-Star Resort",
        "All Meals & Drinks",
        "Private Guide",
        "Luxury Transport",
        "Spa Access",
        "Adventure Activities",
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely amazing experience! The guide was knowledgeable and the scenery was breathtaking.",
      avatar: "https://picsum.photos/50/50?random=1",
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great tour with excellent organization. Would definitely recommend to friends and family.",
      avatar: "https://picsum.photos/50/50?random=2",
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      date: "3 weeks ago",
      comment:
        "Perfect adventure! Every detail was well planned and the accommodation was fantastic.",
      avatar: "https://picsum.photos/50/50?random=3",
    },
  ];

  const itinerary = [
    {
      day: 1,
      title: "Arrival & City Welcome",
      activities: [
        "Airport pickup",
        "Hotel check-in",
        "Welcome dinner",
        "City orientation",
      ],
      time: "All Day",
    },
    {
      day: 2,
      title: "Historic City Tour",
      activities: [
        "Morning museum visit",
        "Lunch at local restaurant",
        "Walking tour",
        "Evening cultural show",
      ],
      time: "9:00 AM - 8:00 PM",
    },
    {
      day: 3,
      title: "Nature Adventure",
      activities: [
        "Mountain hiking",
        "Scenic viewpoints",
        "Picnic lunch",
        "Wildlife watching",
      ],
      time: "7:00 AM - 6:00 PM",
    },
    {
      day: 4,
      title: "Cultural Immersion",
      activities: [
        "Local market visit",
        "Cooking class",
        "Traditional crafts",
        "Folk music evening",
      ],
      time: "10:00 AM - 9:00 PM",
    },
    {
      day: 5,
      title: "Departure",
      activities: ["Free morning", "Last-minute shopping", "Airport transfer"],
      time: "Until departure",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(https://picsum.photos/1920/600?random=hero)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                Best Seller
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Magical Swiss Alps Adventure
            </h1>
            <p className="text-xl mb-6 max-w-2xl">
              Discover the breathtaking beauty of Switzerland with our expertly
              crafted 5-day journey through the majestic Alps.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Interlaken, Switzerland</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Available Year Round</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Max 12 People</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex space-x-3">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-12 h-12 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Camera className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
              {[
                { id: "overview", label: "Overview" },
                { id: "itinerary", label: "Itinerary" },
                { id: "reviews", label: "Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Embark on an unforgettable journey through the Swiss Alps,
                    where pristine mountain peaks meet charming villages and
                    crystal-clear lakes. This carefully curated tour combines
                    adventure, culture, and relaxation to give you the ultimate
                    Swiss experience.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Languages</h3>
                        <p className="text-gray-600">English, German, French</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Group Size</h3>
                        <p className="text-gray-600">4-12 participants</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Duration</h3>
                        <p className="text-gray-600">5 days, 4 nights</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Difficulty</h3>
                        <p className="text-gray-600">Moderate</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Professional English-speaking guide",
                      "All transportation during the tour",
                      "Accommodation in selected hotels",
                      "Daily breakfast and 3 dinners",
                      "All entrance fees and activities",
                      "Travel insurance coverage",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery */}
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                      >
                        <img
                          src={`https://picsum.photos/300/300?random=${i + 10}`}
                          alt={`Gallery ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "itinerary" && (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border-l-4 border-blue-600 pl-6 pb-6"
                    >
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {day.day}
                        </div>
                        <h3 className="text-xl font-semibold">{day.title}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {day.time}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {day.activities.map((activity, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Customer Reviews</h2>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">(4.8 out of 5)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-100 pb-6 last:border-b-0"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{review.name}</h4>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex space-x-1 mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${
                                  star <= review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-blue-600">$499</span>
                  <span className="text-gray-500 ml-2">per person</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-gray-500">(124)</span>
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Package Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Package
                </label>
                <div className="space-y-3">
                  {tourPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        selectedPackage === pkg.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{pkg.name}</h4>
                        <span className="text-blue-600 font-bold">
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {pkg.duration}
                      </p>
                      <div className="text-xs text-gray-500">
                        {pkg.features.slice(0, 3).join(" • ")}
                        {pkg.features.length > 3 &&
                          ` +${pkg.features.length - 3} more`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4">
                Book Now
              </button>

              <button className="w-full border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 mb-4">
                Add to Wishlist
              </button>

              {/* Quick Info */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Free cancellation up to 24 hours before</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                  <Users className="w-4 h-4" />
                  <span>Small group experience</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Award className="w-4 h-4" />
                  <span>Certified local guides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
