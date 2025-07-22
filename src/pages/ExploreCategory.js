import React from 'react';

const TravelCategories = () => {
  const categories = [
    {
      title: "Travel Tours",
      description: "Multi-day trips, guided tours, or group travel experiences.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Local Meetups",
      description: "Small gatherings in local areas — coffee chats, walking groups.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Outdoor Adventures",
      description: "Hiking, biking, camping, beach days, nature walks.",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Family Events",
      description: "Family-friendly trips (picnics, zoo visits, theme parks).",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Cultural Experiences",
      description: "Museums, historical sites, local traditions and festivals.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Food & Drink",
      description: "Restaurant tours, cooking classes, wine tastings.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Wellness Retreats",
      description: "Yoga retreats, spa getaways, meditation sessions.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "City Breaks",
      description: "Weekend getaways to urban destinations worldwide.",
      image: "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Beach Vacations",
      description: "Relaxing coastal getaways and water activities.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Winter Sports",
      description: "Skiing, snowboarding, and other cold-weather activities.",
      image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Explore Travel Categories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the perfect type of travel experience for your next adventure
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;