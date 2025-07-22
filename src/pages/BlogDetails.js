import React, { useState } from 'react';
import { Heart, Share2, Calendar, Clock, Eye, Star, DollarSign, TrendingUp, MessageCircle, Facebook, Twitter, Instagram, Link } from 'lucide-react';

const BlogDetails = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [likes, setLikes] = useState(342);

  // Sample blog data - in real app this would come from props or API
  const blogData = {
    id: 1,
    title: "Hidden Gems of Southeast Asia: 15 Destinations Off the Beaten Path",
    excerpt: "Discover secret beaches, ancient temples, and local markets that most tourists never see. From Myanmar's forgotten cities to Philippines' untouched islands, explore the region's best-kept secrets.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop",
    category: "destinations",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=64&h=64&fit=crop&crop=faces",
    date: "2024-07-15",
    readTime: "8 min read",
    views: "12.5k",
    tags: ["Southeast Asia", "Hidden Gems", "Adventure"],
    rating: 4.9,
    difficulty: "Intermediate",
    budget: "$50-100/day",
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Southeast Asia has always been a magnet for travelers seeking adventure, culture, and natural beauty. While destinations like Bangkok, Bali, and Singapore draw millions of visitors each year, the region's true treasures often lie hidden from the typical tourist trail.</p>

      <p class="text-gray-700 leading-relaxed mb-6">After spending three years exploring every corner of Southeast Asia, I've discovered incredible destinations that offer authentic experiences without the crowds. These hidden gems provide a glimpse into the region's soul – from pristine beaches where you'll be the only footprint in the sand to ancient temples where monks still practice centuries-old traditions.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Koh Rong Sanloem, Cambodia</h2>
      <p class="text-gray-700 leading-relaxed mb-6">While everyone flocks to Thailand's islands, Cambodia's Koh Rong Sanloem remains blissfully underdeveloped. The island boasts some of the clearest waters in Southeast Asia and beaches that stretch for miles without a soul in sight. The bioluminescent plankton here creates a magical light show every night – nature's own fireworks display.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Hpa-An, Myanmar</h2>
      <p class="text-gray-700 leading-relaxed mb-6">Nestled in Karen State, Hpa-An is a karst landscape wonderland dotted with caves, pagodas, and rice paddies. The town sits on the Thanlwin River, surrounded by limestone mountains that create a dramatic backdrop. Climb Mount Zwegabin at sunrise for views that will take your breath away.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Siquijor Island, Philippines</h2>
      <p class="text-gray-700 leading-relaxed mb-6">Known locally as the "Island of Fire" due to its mystical reputation, Siquijor offers pristine beaches, enchanted forests, and healing springs. The island moves at a slower pace, where carabao carts still outnumber motorcycles and traditional healers practice ancient arts.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Planning Your Adventure</h2>
      <p class="text-gray-700 leading-relaxed mb-6">The best time to visit these destinations is during the dry season (November to April). Pack light, bring a good camera, and most importantly, come with an open mind. These places reward travelers who embrace spontaneity and aren't afraid to venture off the well-worn path.</p>

      <p class="text-gray-700 leading-relaxed mb-6">Remember that these destinations are special because they remain relatively untouched. Travel responsibly, respect local customs, and leave only footprints. The goal is to ensure these hidden gems remain pristine for future generations of adventurous travelers.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Best Street Food Markets in Vietnam",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=200&fit=crop",
      category: "food",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Island Hopping Guide: Philippines",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      category: "destinations",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Budget Travel Tips for Southeast Asia",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop",
      category: "budget",
      readTime: "5 min read"
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    setShowShareModal(!showShareModal);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${blogData.image})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                  {blogData.category}
                </span>
              </div>
              <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight">
                {blogData.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl">
                {blogData.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            {/* Article Meta */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col gap-4 sm:flex-row items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={blogData.authorImage}
                    alt={blogData.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{blogData.author}</p>
                    <p className="text-gray-500 text-sm">Travel Writer & Photographer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(blogData.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogData.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {blogData.views}
                  </div>
                </div>
              </div>

              {/* Travel Info Cards */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 px-3 py-2 rounded-lg border border-yellow-200 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-600" />
                  <div>
                    <span className="text-yellow-800 font-medium text-sm">Rating</span>
                    <p className="text-yellow-700 font-bold text-sm">{blogData.rating}/5.0</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 px-3 py-2 rounded-lg border border-green-200 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <div>
                    <span className="text-green-800 font-medium text-sm">Difficulty</span>
                    <p className="text-green-700 font-bold text-sm">{blogData.difficulty}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-3 py-2 rounded-lg border border-blue-200 flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <div>
                    <span className="text-blue-800 font-medium text-sm">Budget</span>
                    <p className="text-blue-700 font-bold text-sm">{blogData.budget}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blogData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: blogData.content }}
              />
            </div>

            {/* Engagement Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                      isLiked 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
                    <span className="font-medium">{likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">24</span>
                  </button>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="font-medium">Share</span>
                </button>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded text-xs font-medium capitalize">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{post.readTime}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="text-center">
                <img
                  src={blogData.authorImage}
                  alt={blogData.author}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-bold text-gray-900 mb-2">{blogData.author}</h3>
                <p className="text-gray-600 text-sm mb-4">Travel Writer & Photographer</p>
                <p className="text-gray-500 text-sm mb-4">
                  Exploring Southeast Asia for 3+ years. Sharing hidden gems and authentic experiences.
                </p>
                <div className="flex justify-center space-x-3">
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg p-6 text-white">
              <h3 className="font-bold mb-3">Get Travel Updates</h3>
              <p className="text-blue-100 text-sm mb-4">
                Subscribe to our newsletter for the latest travel guides and hidden gems.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">Share Article</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
                <span>Share on Facebook</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
                <span>Share on Twitter</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Link className="w-5 h-5" />
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;