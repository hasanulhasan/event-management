import { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Heart,
  Award,
  ChevronRight,
  Globe,
  Compass,
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const travelImages = ["🏔️", "🏖️", "🏛️", "🗽", "🗼", "🏰", "🌋", "🏞️"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % travelImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [travelImages.length]);

  const stats = [
    { number: "500K+", label: "Travelers Served", icon: Users },
    { number: "150+", label: "Destinations", icon: Globe },
    { number: "2000+", label: "Events Organized", icon: Calendar },
    { number: "98%", label: "Satisfaction Rate", icon: Heart },
  ];

  const values = [
    {
      icon: Compass,
      title: "Adventure",
      description:
        "We believe every journey should be an adventure that creates unforgettable memories and transforms perspectives.",
    },
    {
      icon: Heart,
      title: "Cultural Connection",
      description:
        "We connect travelers with authentic local experiences, fostering meaningful cultural exchanges worldwide.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a global community of passionate travelers who share experiences and inspire each other.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver exceptional service and carefully curated experiences that exceed expectations.",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Travel Enthusiast",
      avatar: "👨‍✈️",
      color: "from-blue-400 to-blue-600",
      bio: "World traveler who has visited 75 countries and counting",
    },
    {
      name: "Maya Chen",
      role: "Head of Events",
      avatar: "👩‍🎨",
      color: "from-purple-400 to-purple-600",
      bio: "Creative event planner specializing in cultural festivals",
    },
    {
      name: "Jordan Smith",
      role: "Adventure Guide Director",
      avatar: "🧗‍♂️",
      color: "from-green-400 to-green-600",
      bio: "Mountain climbing expert and wilderness adventure specialist",
    },
    {
      name: "Sofia Martinez",
      role: "Cultural Ambassador",
      avatar: "👩‍🏫",
      color: "from-pink-400 to-pink-600",
      bio: "Language expert fluent in 8 languages, cultural bridge builder",
    },
  ];

  const destinations = [
    { name: "Santorini", emoji: "🏛️", description: "Greek island paradise" },
    { name: "Tokyo", emoji: "🗼", description: "Modern meets traditional" },
    { name: "Machu Picchu", emoji: "🏔️", description: "Ancient Incan wonder" },
    { name: "Bali", emoji: "🏖️", description: "Tropical beach escape" },
    { name: "Paris", emoji: "🗼", description: "City of lights & love" },
    { name: "Safari Kenya", emoji: "🦁", description: "Wildlife adventure" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-teal-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Floating Travel Icons Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 text-4xl animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            ✈️
          </div>
          <div
            className="absolute top-40 right-20 text-3xl animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            🗺️
          </div>
          <div
            className="absolute bottom-32 left-20 text-5xl animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            🎒
          </div>
          <div
            className="absolute bottom-20 right-10 text-4xl animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            📸
          </div>
          <div
            className="absolute top-60 left-1/2 text-3xl animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            🌍
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="text-8xl mb-6 animate-pulse">
            {travelImages[currentImageIndex]}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Travel & Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Creating extraordinary travel experiences and unforgettable events
            that connect people with the world's most amazing destinations and
            cultures.
          </p>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-500 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: "mission", label: "Our Mission", icon: Compass },
              { id: "story", label: "Our Journey", icon: MapPin },
              { id: "values", label: "Our Values", icon: Heart },
              { id: "team", label: "Meet Our Guides", icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Section */}
        {activeTab === "mission" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To inspire wanderlust and create life-changing travel
                experiences that broaden horizons, build connections, and foster
                a deeper understanding of our beautiful, diverse world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  What We Offer
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="w-6 h-6 text-blue-500 mt-1" />
                    <p className="text-gray-700">
                      Curated travel packages to exotic destinations worldwide
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="w-6 h-6 text-blue-500 mt-1" />
                    <p className="text-gray-700">
                      Immersive cultural events and local festival experiences
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="w-6 h-6 text-blue-500 mt-1" />
                    <p className="text-gray-700">
                      Adventure tours for thrill-seekers and nature lovers
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChevronRight className="w-6 h-6 text-blue-500 mt-1" />
                    <p className="text-gray-700">
                      Custom event planning for corporate and private gatherings
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div
                  className="absolute top-4 right-4 text-4xl animate-spin"
                  style={{ animationDuration: "10s" }}
                >
                  🧭
                </div>
                <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                <p className="text-lg opacity-90">
                  To become the world's most trusted travel companion, known for
                  creating authentic, sustainable, and transformative
                  experiences that connect people with the magic of exploration.
                </p>
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Popular Destinations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {destinations.map((dest, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div
                      className="text-4xl mb-3 animate-bounce"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {dest.emoji}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      {dest.name}
                    </h4>
                    <p className="text-sm text-gray-600">{dest.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-4 animate-pulse" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story Section */}
        {activeTab === "story" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Born from a passion for exploration and a dream to share the
                world's wonders with fellow adventurers.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-3xl animate-bounce">
                  🌱
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    2019
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    The Adventure Begins
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Started as a small group of travel enthusiasts organizing
                  weekend getaways for friends. Our first trip to the Blue
                  Mountains attracted 12 adventurous souls and sparked the idea
                  for something bigger - sharing the joy of discovery with the
                  world.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-3xl animate-pulse">
                  🚀
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    2021
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Going Global
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Expanded to international destinations and launched our first
                  cultural festival tour in India. The response was overwhelming
                  - travelers loved experiencing authentic local celebrations
                  and connecting with communities around the world.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div
                  className="absolute top-4 right-4 text-3xl animate-spin"
                  style={{ animationDuration: "5s" }}
                >
                  🌟
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Award-Winning Experiences
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Today, we're proud to be recognized as "Best Adventure Travel
                  Company" and "Most Innovative Event Planner." With over
                  500,000 travelers served and partnerships with local
                  communities in 150+ destinations, we continue to create magic
                  one journey at a time.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Values Section */}
        {activeTab === "values" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The principles that guide our adventures and shape every
                experience we create for our travelers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-2xl animate-pulse">
                    {index === 0
                      ? "🗺️"
                      : index === 1
                      ? "🤝"
                      : index === 2
                      ? "👥"
                      : "⭐"}
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeTab === "team" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Meet Our Adventure Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The passionate explorers and cultural enthusiasts who make every
                journey extraordinary.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div
                    className={`h-32 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div
                      className="text-6xl animate-bounce"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {member.avatar}
                    </div>
                    <div
                      className="absolute top-2 right-2 text-2xl animate-spin"
                      style={{ animationDuration: "8s" }}
                    >
                      ✨
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-3xl animate-bounce" style={{animationDelay: '0s'}}>🎪</div>
          <div className="absolute top-20 right-20 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🎭</div>
          <div className="absolute bottom-20 left-20 text-3xl animate-bounce" style={{animationDelay: '2s'}}>🎨</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🎵</div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of travelers who have discovered the magic of exploration with us. 
            Let's create your perfect journey together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Plan My Trip
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              View Destinations
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
