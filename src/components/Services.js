import React from 'react'

import {  MapPin, Plane, Camera, Globe, } from 'lucide-react';

export default function Services() {
      const experiences = [
        {
          icon: <Plane className="w-8 h-8 text-blue-500" />,
          title: "Flight Booking",
          description: "Find the best deals on flights worldwide"
        },
        {
          icon: <MapPin className="w-8 h-8 text-green-500" />,
          title: "Hotel Stays",
          description: "Comfortable accommodations for every budget"
        },
        {
          icon: <Camera className="w-8 h-8 text-purple-500" />,
          title: "Tour Packages",
          description: "Curated experiences and guided tours"
        },
        {
          icon: <Globe className="w-8 h-8 text-orange-500" />,
          title: "Travel Insurance",
          description: "Stay protected during your adventures"
        }
      ];

  return (
<section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect trip</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {experience.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
