/* eslint-disable jsx-a11y/anchor-is-valid */

export default function WorldPlace() {
    const destinations = [
    {
      id: 'europe',
      title: 'Europe',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=200&fit=crop&auto=format',
      countries: [
        { name: 'Amalfi Coast', link: true },
        { name: 'Austria', link: false },
        { name: 'Croatia', link: false },
        { name: 'Eastern Europe', link: true },
        { name: 'England', link: false },
        { name: 'Finland', link: false },
        { name: 'France', link: false },
        { name: 'Germany', link: false },
        { name: 'Great Britain & UK', link: false },
        { name: 'Greece', link: false },
        { name: 'Greek Islands', link: false },
        { name: 'Iceland', link: false },
        { name: 'Ireland', link: false },
        { name: 'Italy', link: false },
        { name: 'Netherlands', link: false },
        { name: 'Norway', link: false },
        { name: 'Poland', link: false },
        { name: 'Portugal', link: false },
        { name: 'Portugal & Spain', link: true },
        { name: 'Scandinavia', link: false },
        { name: 'Scotland', link: false },
        { name: 'Sicily', link: false },
        { name: 'Spain', link: false },
        { name: 'Switzerland', link: false },
        { name: 'Turkey', link: false },
        { name: 'Tuscany', link: false }
      ]
    },
    {
    id: 'asia',
      title: 'Asia',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=200&fit=crop&auto=format',
      countries: [
        { name: 'Bali', link: false },
        { name: 'Bhutan', link: false },
        { name: 'Cambodia', link: false },
        { name: 'China', link: false },
        { name: 'Georgia', link: false },
        { name: 'Holy Land', link: false },
        { name: 'India', link: false },
        { name: 'Indonesia', link: false },
        { name: 'Israel', link: false },
        { name: 'Japan', link: false },
        { name: 'Jordan', link: false },
        { name: 'Malaysia', link: false },
        { name: 'Nepal', link: false },
        { name: 'South Korea', link: false },
        { name: 'Southeast Asia', link: false },
        { name: 'Sri Lanka', link: false },
        { name: 'Thailand', link: false },
        { name: 'Vietnam', link: false }
      
      ]
    },
    { 
      id: 'africa',
      title: 'Africa',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=200&fit=crop&auto=format',
      countries: [
        { name: 'Egypt', link: false },
        { name: 'Kenya', link: false },
        { name: 'Morocco', link: false },
        { name: 'Namibia', link: false },
        { name: 'South Africa', link: false },
        { name: 'Tanzania', link: false }
      
      ]
    },
    {
      id: 'latin-america',
      title: 'Latin America',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=200&fit=crop&auto=format',
      countries: [
        { name: 'Argentina', link: false },
        { name: 'Brazil', link: false },
        { name: 'Chile', link: false },
        { name: 'Colombia', link: false },
        { name: 'Costa Rica', link: false },
        { name: 'Ecuador', link: false },
        { name: 'Machu Picchu', link: true },
        { name: 'Mexico', link: false },
        { name: 'Panama', link: false },
        { name: 'Patagonia', link: false },
        { name: 'Peru', link: false },
        { name: 'South America', link: false }
      ]
    },
    {
      id: 'australia-oceania',
      title: 'Australia/Oceania',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=200&fit=crop&auto=format',
      countries: [
        { name: 'Australia', link: false },
        { name: 'Great Barrier Reef', link: false },
        { name: 'New Zealand', link: false }
      ]
    },
    {
      id: 'north-america',
      title: 'North America',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=200&fit=crop&auto=format',
      countries: [
        { name: 'Alaska', link: false },
        { name: 'California', link: false },
        { name: 'Canada', link: false },
        { name: 'Grand Canyon', link: false },
        { name: 'USA', link: false }
      ]
    }
    
  ];
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 mb-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Popular Destinations</h1>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {destinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-lg shadow-sm overflow-hidden h-max">
            {/* Header Image with Title and Buttons */}
            <div className="relative h-40">
              <img 
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-between p-6">
                <h2 className="text-white text-2xl font-bold">{destination.title}</h2>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors duration-300 text-sm">
                    All Adventures
                  </button>
                  <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors duration-300 text-sm">
                    Deals
                  </button>
                </div>
              </div>
            </div>

            {/* Countries List */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-y-3 gap-x-4">
                {destination.countries.map((country, index) => (
                  <div key={index}>
                    <a 
                      href="#" 
                      className={`text-sm hover:underline transition-colors duration-300 ${
                        country.link 
                          ? 'text-blue-600 hover:text-blue-800' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {country.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
