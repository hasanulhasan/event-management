import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, Mountain, Ship, Eye, MapPin, Compass } from 'lucide-react';

export default function TravelWorld() {
     const scrollRefs = useRef({});

  const scrollLeft = (categoryId) => {
    const container = scrollRefs.current[categoryId];
    if (container) {
      container.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  const scrollRight = (categoryId) => {
    const container = scrollRefs.current[categoryId];
    if (container) {
      container.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };
    const travelCategories = [
    {
      id: 'hiking',
      icon: <Mountain className="w-5 h-5" />,
      title: 'Hiking & Trekking',
      destinations: [
        {
          name: 'Nepal',
          image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Everest Base Camp',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Machu Picchu',
          image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Kilimanjaro',
          image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Spain',
          image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Switzerland',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Patagonia',
          image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Peru',
          image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=300&h=200&fit=crop&auto=format'
        }
      ]
    },
    {
      id: 'cruises',
      icon: <Ship className="w-5 h-5" />,
      title: 'River Cruises',
      destinations: [
        {
          name: 'Nile',
          image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Danube',
          image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Rhine',
          image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Main',
          image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Mekong',
          image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Amazon',
          image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Volga',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Mississippi',
          image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop&auto=format'
        }
      ]
    },
    {
      id: 'safari',
      icon: <Eye className="w-5 h-5" />,
      title: 'Safari',
      destinations: [
        {
          name: 'Africa',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Tanzania',
          image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Kenya',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'South Africa',
          image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Botswana',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Namibia',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Zimbabwe',
          image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Zambia',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=300&h=200&fit=crop&auto=format'
        }
      ]
    },
    {
      id: 'europe',
      icon: <MapPin className="w-5 h-5" />,
      title: 'Explore Europe',
      destinations: [
        {
          name: 'Train & Rail',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'River Cruise',
          image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Bicycle',
          image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Budget',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Family',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Zimbabwe',
          image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Zambia',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=300&h=200&fit=crop&auto=format'
        }
      ]
    },
    {
      id: 'adventure',
      icon: <Compass className="w-5 h-5" />,
      title: 'Popular Adventure Styles',
      destinations: [
        {
          name: 'Sailing',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Festivals & Events',
          image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Food & Culinary',
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Cultural',
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Bicycle',
          image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Zimbabwe',
          image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&h=200&fit=crop&auto=format'
        },
        {
          name: 'Zambia',
          image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=300&h=200&fit=crop&auto=format'
        }
      ]
    }
  ];
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen my-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Travel The World Your Way</h1>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {travelCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg p-6 shadow-sm">
            {/* Category Header */}
            <div className="flex items-center mb-6">
              <div className="flex items-center text-gray-700">
                {category.icon}
                <h2 className="text-xl font-semibold ml-3">{category.title}</h2>
              </div>
            </div>

            {/* Horizontal Scrollable Cards with Arrow Controls */}
            <div className="relative">
              {/* Left Arrow */}
              <button 
                onClick={() => scrollLeft(category.id)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              {/* Cards Container */}
              <div 
                ref={(el) => scrollRefs.current[category.id] = el}
                className="flex space-x-4 overflow-x-hidden px-12 py-2"
              >
                {category.destinations.map((destination, index) => (
                  <div 
                    key={index}
                    className="flex-none w-48 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-gray-800 text-sm">{destination.name}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={() => scrollRight(category.id)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
