import React, { useState, useEffect } from 'react';

const TourCategories = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const categories = [
    {
      id: 1,
      title: 'Airbirds',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
      rotation: -15
    },
    {
      id: 2,
      title: 'Wildlife',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      rotation: -8
    },
    {
      id: 3,
      title: 'Walking',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
      rotation: -3
    },
    {
      id: 4,
      title: 'Cruises',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      rotation: 2
    },
    {
      id: 5,
      title: 'Hiking',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      rotation: 8
    },
    {
      id: 6,
      title: 'Adventure',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop',
      rotation: 12
    },
    {
      id: 7,
      title: 'Water Sports',
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop',
      rotation: -10
    },
    {
      id: 8,
      title: 'Mountain',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      rotation: 5
    },
    {
      id: 9,
      title: 'Desert',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop',
      rotation: -7
    },
    {
      id: 10,
      title: 'Beach',
      image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=400&h=300&fit=crop',
      rotation: 15
    }
  ];

  const totalSlides = categories.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + totalSlides) % totalSlides;
      visibleCards.push({
        ...categories[index],
        position: i,
        originalIndex: index
      });
    }
    return visibleCards;
  };

  const getCardStyle = (position, rotation) => {
    const baseTranslateX = position * 280;
    const scale = position === 0 ? 1 : 0.9;
    const opacity = Math.abs(position) <= 2 ? 1 : 0;
    const zIndex = 20 - Math.abs(position);

    return {
      transform: `translateX(${baseTranslateX}px) scale(${scale}) rotate(${rotation}deg)`,
      opacity,
      zIndex,
      transition: 'all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
    };
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section 
  className="bg-gradient-to-r from-gray-50 to-gray-100 relative py-16 px-4 overflow-hidden"
  // style={{
  //   backgroundImage: "url('Travel-background-1.png')",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat"
  // }}
>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-300/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 text-lg font-medium mb-3" style={{fontFamily: 'cursive', fontWeight: '400'}}>
            Wonderful Place For You
          </h2>
          <h1 className="text-5xl font-bold text-slate-800 tracking-tight">
            Tour Categories
          </h1>
        </div>

        {/* Cards Container */}
        <div className="relative h-80 mb-12 overflow-visible">
          <div className="flex items-center justify-center h-full">
            {getVisibleCards().map((category) => (
              <div
                key={`${category.id}-${category.position}`}
                className="absolute cursor-pointer group"
                style={getCardStyle(category.position, category.rotation)}
                onClick={() => handleDotClick(category.originalIndex)}
              >
                <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative h-full">
                    {/* Image */}
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category.title}
                      </h3>
                      {/* <button className="text-white/90 text-sm hover:text-white transition-colors duration-200 underline underline-offset-2 decoration-1">
                        See More
                      </button> */}
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;