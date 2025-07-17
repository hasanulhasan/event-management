import React from "react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of travelers who trust us to make their dreams come
          true
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Plan My Trip
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
