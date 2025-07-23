import { useState } from 'react';
import { FaHeart, FaRegHeart, FaSearch, FaComment, FaShareAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EventMomentsGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample events data with Australian locations
  const events = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `${['Wedding', 'Birthday', 'Corporate', 'Concert', 'Exhibition'][i % 5]} ${['Event', 'Party', 'Gala', 'Night', 'Showcase'][i % 5]}`,
    date: new Date(2024, (i * 2) % 12, (i * 3) % 28 + 1).toLocaleDateString('en-AU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    location: `${['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'][i % 5]}, Australia`,
    photos: Array.from({ length: 15 }, (_, j) => ({
      id: j + 1,
      url: `https://picsum.photos/id/${i * 15 + j + 10}/800/600`,
      thumbnail: `https://picsum.photos/id/${i * 15 + j + 10}/300/200`,
      likes: Math.floor(Math.random() * 100),
      comments: []
    })),
    coverPhoto: `https://picsum.photos/id/${i + 100}/400/250`
  }));

  // Filter events based on search term
  const filteredEvents = events.filter(event => {
    const searchLower = searchTerm.toLowerCase();
    return (
      event.name.toLowerCase().includes(searchLower) ||
      event.date.toLowerCase().includes(searchLower) ||
      event.location.toLowerCase().includes(searchLower)
    );
  });

  // Gallery functions
  const openGallery = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const closeGallery = (e) => {
    // Only close if clicking on the backdrop (not the gallery content)
    if (e.target === e.currentTarget) {
      setSelectedEvent(null);
    }
  };

  const prevImage = () => setCurrentImageIndex(prev => (prev === 0 ? 14 : prev - 1));
  const nextImage = () => setCurrentImageIndex(prev => (prev === 14 ? 0 : prev + 1));

  // Comment functions
  const addComment = () => {
    if (!newComment.trim()) return;
    
    const key = `${selectedEvent.id}-${selectedEvent.photos[currentImageIndex].id}`;
    setComments(prev => ({
      ...prev,
      [key]: [...(prev[key] || []), {
        id: Date.now(),
        text: newComment,
        author: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]
    }));
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Event Moments Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive your favorite event memories through our curated photo collections
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search events by name, date, or location..."
            className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:border-transparent transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Events Grid - Now 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div 
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Card Image - Full width with overlay text */}
            <div className="relative h-64 w-full grid grid-cols-2 gap-0 overflow-hidden">
  {/* Left large image */}
  <img
    src={event.photos[0]?.thumbnail}
    alt="Event"
    className="w-full h-full object-cover col-span-1 rounded-l-2xl cursor-pointer transition-transform duration-500 hover:scale-105"
    onClick={() => openGallery(event)}
    onError={(e) => {
      e.target.src = `https://picsum.photos/id/${event.id * 15 + 10}/300/200`;
    }}
  />

  {/* Right two stacked images */}
  <div className="flex flex-col h-full col-span-1">
    {[1, 2].map((i) => (
      <img
        key={i}
        src={event.photos[i]?.thumbnail}
        alt={`Event image ${i + 1}`}
        className="w-full h-1/2 object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
        onClick={() => openGallery(event)}
        onError={(e) => {
          e.target.src = `https://picsum.photos/id/${event.id * 15 + i + 10}/300/200`;
        }}
      />
    ))}
  </div>

  {/* Overlay text */}
  <div
    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white p-4 flex flex-col justify-end cursor-pointer"
    onClick={() => openGallery(event)}
  >
    <h3 className="text-lg font-bold drop-shadow">{event.name}</h3>
    <p className="text-sm text-white/90 flex items-center mt-1">
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {event.date}
    </p>
    <p className="text-sm text-white/90 flex items-center">
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {event.location}
    </p>
  </div>
</div>


              {/* Card Footer */}
              <div className="p-4 flex justify-between items-center">
                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {event.photos.length} photos
                </span>
                <button 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  onClick={() => openGallery(event)}
                >
                  View Gallery
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-24">
            <div className="mx-auto h-32 w-32 text-gray-300 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500 max-w-md mx-auto">We couldn't find any events matching your search. Try different keywords.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Gallery Modal */}
        {selectedEvent && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeGallery}
          >
            <div 
              className="relative w-full max-w-6xl bg-white rounded-2xl overflow-auto max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
            >
              {/* Close Button */}
              <button 
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Gallery Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Main Image Area */}
                <div className="lg:w-3/4 bg-gray-900 flex items-center justify-center relative min-h-[50vh]">
                  <img
                    src={selectedEvent.photos[currentImageIndex].url}
                    alt={`Event ${selectedEvent.id}`}
                    className="max-h-[70vh] max-w-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/id/${selectedEvent.id * 15 + currentImageIndex + 10}/800/600`;
                    }}
                  />
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Info Sidebar */}
                <div className="lg:w-1/4 p-6 overflow-y-auto border-l border-gray-200">
                  <div className="sticky top-0 bg-white pt-2 pb-4 z-10">
                    <h2 className="text-2xl font-bold mb-1 text-gray-900">{selectedEvent.name}</h2>
                    <div className="flex flex-col text-sm text-gray-500 mb-4 space-y-1">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {selectedEvent.date}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {selectedEvent.location}
                      </span>
                    </div>

                    {/* Image Counter */}
                    <div className="mb-4 text-sm text-gray-500 font-medium">
                      Image {currentImageIndex + 1} of {selectedEvent.photos.length}
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center space-x-4 mb-6 border-b border-gray-100 pb-4">
                      <button className="flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors duration-200">
                        {Math.random() > 0.5 ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart />
                        )}
                        <span>{selectedEvent.photos[currentImageIndex].likes || 0}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-200">
                        <FaComment />
                        <span>{(comments[`${selectedEvent.id}-${selectedEvent.photos[currentImageIndex].id}`] || []).length}</span>
                      </button>
                      <button className="text-gray-700 hover:text-green-500 transition-colors duration-200">
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Comments</h3>
                    <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
                      {(comments[`${selectedEvent.id}-${selectedEvent.photos[currentImageIndex].id}`] || []).map(comment => (
                        <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-start">
                            <span className="font-medium text-sm text-gray-900">{comment.author}</span>
                            <span className="text-xs text-gray-400">{comment.time}</span>
                          </div>
                          <p className="text-sm mt-1 text-gray-600">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add Comment */}
                  <div className="mt-auto">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="w-full border border-gray-200 rounded-lg p-3 text-sm mb-3 focus:border-transparent transition-all duration-200"
                      rows="3"
                    />
                    <button
                      onClick={addComment}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 w-full transition-colors duration-200 font-medium"
                    >
                      Post Comment
                    </button>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="mt-8">
                    <h4 className="font-medium text-base mb-3 text-gray-900">All Photos</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {selectedEvent.photos.map((photo, index) => (
                        <img
                          key={photo.id}
                          src={photo.thumbnail}
                          alt={`Thumbnail ${index}`}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`cursor-pointer aspect-square object-cover rounded-md transition-all duration-200 ${
                            currentImageIndex === index ? 'ring-2 ring-blue-500 scale-105' : 'opacity-80 hover:opacity-100 hover:scale-105'
                          }`}
                          onError={(e) => {
                            e.target.src = `https://picsum.photos/id/${selectedEvent.id * 15 + index + 10}/300/200`;
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventMomentsGallery;