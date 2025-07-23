import { useState, useEffect } from "react";

export default function HomeBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // Travel destinations for background slideshow
  const travelImages = [
    {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      location: "Swiss Alps",
    },
    {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
      location: "Tropical Paradise",
    },
    {
      url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3",
      location: "European Cities",
    },
    {
      url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
      location: "Asian Temples",
    },
    {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      location: "Beach Destinations",
    },
  ];

  // Typing animation
  useEffect(() => {
    const text = "Explore The World";
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % travelImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [travelImages.length]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {travelImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
      </div>

      {/* Animated overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

      {/* Floating travel icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float-icon">
          ✈️
        </div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float-icon-reverse">
          🏝️
        </div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-float-icon-slow">
          🗺️
        </div>
        <div className="absolute top-60 left-1/3 text-4xl opacity-20 animate-float-icon">
          🧳
        </div>
        <div className="absolute bottom-60 right-1/3 text-5xl opacity-20 animate-float-icon-reverse">
          🏔️
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="text-center max-w-4xl">
          {/* Location indicator */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Currently showcasing: {travelImages[currentImageIndex].location}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-white drop-shadow-lg">{typedText}</span>
            <span className="text-white animate-blink">|</span>
          </h1>

          <p className="text-2xl text-white mb-12 animate-fade-in-delay drop-shadow-lg">
            Discover amazing destinations and create unforgettable memories
          </p>

          {/* Animated stats */}
          <div className="flex justify-center gap-8 mb-12 text-white">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-3xl font-bold animate-count">150+</div>
              <div className="text-sm opacity-80">Countries</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-3xl font-bold animate-count">500+</div>
              <div className="text-sm opacity-80">Tours</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="text-3xl font-bold animate-count">50K+</div>
              <div className="text-sm opacity-80">Travelers</div>
            </div>
          </div>

          <div className="flex gap-6 justify-center">
            <button className="px-4 md:px-8 py-2 md:py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 animate-bounce-in shadow-xl">
              Plan Your Trip
            </button>
            <button className="px-4 md:px-8 py-2 md:py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 animate-bounce-in-delay backdrop-blur-sm">
              View Destinations
            </button>
          </div>
        </div>
      </div>

      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.3"
            d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,106.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) translateX(10px) rotate(10deg);
          }
          66% {
            transform: translateY(20px) translateX(-10px) rotate(-10deg);
          }
        }

        @keyframes float-icon-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(30px) translateX(-10px) rotate(-10deg);
          }
          66% {
            transform: translateY(-20px) translateX(10px) rotate(10deg);
          }
        }

        @keyframes float-icon-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-40px) translateX(20px);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in-delay {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes wave {
          0%,
          100% {
            d: path(
              "M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,106.7C960,96,1056,96,1152,106.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            );
          }
          50% {
            d: path(
              "M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            );
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes count {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-float-icon {
          animation: float-icon 20s ease-in-out infinite;
        }
        .animate-float-icon-reverse {
          animation: float-icon-reverse 20s ease-in-out infinite;
        }
        .animate-float-icon-slow {
          animation: float-icon-slow 25s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        .animate-bounce-in-delay {
          animation: bounce-in-delay 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          opacity: 0;
        }
        .animate-count {
          animation: count 1.5s ease-out;
        }
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </section>
  );
}
