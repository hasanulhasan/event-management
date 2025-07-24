import React, { useState } from 'react';
import { MapPin, Calendar, Users, DollarSign, MessageCircle, UserPlus, X, Send, CheckCircle, Plus, ChevronDown, ChevronUp, Eye } from 'lucide-react';

const SharePlanTourPage = () => {
  const [tourPlans, setTourPlans] = useState([
    {
      id: 1,
      title: "Cox's Bazar Beach Trip",
      organizer: "আহমেদ হাসান",
      location: "Cox's Bazar",
      duration: "3 Days 2 Nights",
      budget: "৳8,000 per person",
      maxPeople: 8,
      currentJoined: 3,
      startDate: "15 Feb 2025",
      description: "সমুদ্র সৈকতে ৩ দিনের অসাধারণ ভ্রমণ। হোটেল বুকিং, খাবার এবং স্থানীয় ঘোরাঘুরি সব কিছু included।",
      itinerary: ["Day 1: Dhaka to Cox's Bazar", "Day 2: Beach activities & Inani Beach", "Day 3: Himchari & return"],
      comments: [
        { id: 1, user: "সারা খান", text: "দারুণ plan! খরচ কি negotiate করা যাবে?", time: "2 hours ago" },
        { id: 2, user: "রাহুল আহমেদ", text: "কোন হোটেল book করা হবে?", time: "1 hour ago" }
      ],
      interestedUsers: ["সারা খান", "রাহুল আহমেদ", "ফাতেমা বেগম"]
    },
    {
      id: 2,
      title: "Sylhet Tea Garden Adventure",
      organizer: "ফারিয়া আক্তার",
      location: "Sylhet",
      duration: "4 Days 3 Nights",
      budget: "৳12,000 per person",
      maxPeople: 6,
      currentJoined: 2,
      startDate: "22 Feb 2025",
      description: "চা বাগান, জাফলং, রাতারগুল সহ সিলেটের সব দর্শনীয় স্থান। AC transport এবং ভালো হোটেল।",
      itinerary: ["Day 1: Dhaka to Sylhet", "Day 2: Tea Gardens & Jaflong", "Day 3: Ratargul & Bichnakandi", "Day 4: Return"],
      comments: [
        { id: 1, user: "তানিয়া রহমান", text: "রাতারগুল এ boat ride আছে?", time: "3 hours ago" }
      ],
      interestedUsers: ["তানিয়া রহমান", "কামাল উদ্দিন"]
    },
    {
      id: 3,
      title: "Sajek Valley Hill Track",
      organizer: "মোহাম্মদ করিম",
      location: "Sajek Valley",
      duration: "2 Days 1 Night",
      budget: "৳6,500 per person",
      maxPeople: 10,
      currentJoined: 5,
      startDate: "28 Feb 2025",
      description: "সাজেক ভ্যালির মেঘের রাজ্যে হারিয়ে যান। Sunrise point, cloud touching এবং tribal culture experience।",
      itinerary: ["Day 1: Dhaka to Sajek, Evening tribal show", "Day 2: Sunrise point, Return"],
      comments: [
        { id: 1, user: "নাফিস আলম", text: "Weather কেমন থাকবে এই সময়?", time: "5 hours ago" },
        { id: 2, user: "রিনা পারভীন", text: "Single room পাওয়া যাবে?", time: "4 hours ago" }
      ],
      interestedUsers: ["নাফিস আলম", "রিনা পারভীন", "সোহেল রানা"]
    },
    {
      id: 4,
      title: "Sundarbans Mangrove Safari",
      organizer: "ডা. রফিক উল্লাহ",
      location: "Sundarbans",
      duration: "3 Days 2 Nights",
      budget: "৳15,000 per person",
      maxPeople: 12,
      currentJoined: 4,
      startDate: "5 Mar 2025",
      description: "বিশ্ব ঐতিহ্য সুন্দরবনে Royal Bengal Tiger দেখার সুযোগ। Luxury boat এ থাকা খাওয়া।",
      itinerary: ["Day 1: Dhaka to Mongla, Board boat", "Day 2: Deep forest safari", "Day 3: Bird watching, Return"],
      comments: [],
      interestedUsers: ["আসমা খাতুন", "জাহিদ হাসান"]
    },
    {
      id: 5,
      title: "Rangamati Lake Cruise",
      organizer: "সুমিত্রা চাকমা",
      location: "Rangamati",
      duration: "2 Days 1 Night",
      budget: "৳7,500 per person",
      maxPeople: 8,
      currentJoined: 3,
      startDate: "10 Mar 2025",
      description: "কাপ্তাই লেকে cruise, tribal museum, hanging bridge এবং Shuvolong waterfall।",
      itinerary: ["Day 1: Chittagong to Rangamati, Lake cruise", "Day 2: Tribal museum, Return"],
      comments: [
        { id: 1, user: "অর্ণব দাস", text: "Boat এ AC আছে?", time: "6 hours ago" }
      ],
      interestedUsers: ["অর্ণব দাস", "প্রিয়াঙ্কা বর্মন"]
    },
    {
      id: 6,
      title: "Bandarban Hill Adventure",
      organizer: "তৌহিদ ইসলাম",
      location: "Bandarban",
      duration: "4 Days 3 Nights",
      budget: "৳18,000 per person",
      maxPeople: 6,
      currentJoined: 1,
      startDate: "15 Mar 2025",
      description: "Nilgiri, Boga Lake, Nafakhum waterfall সহ বান্দরবানের সব adventure spots।",
      itinerary: ["Day 1: Dhaka to Bandarban", "Day 2: Nilgiri hills", "Day 3: Boga Lake trek", "Day 4: Nafakhum, Return"],
      comments: [
        { id: 1, user: "রিয়াদ করিম", text: "Trekking difficult কতটা?", time: "1 day ago" }
      ],
      interestedUsers: ["রিয়াদ করিম"]
    },
    {
      id: 7,
      title: "Saint Martin Island Paradise",
      organizer: "নাদিয়া সুলতানা",
      location: "Saint Martin",
      duration: "3 Days 2 Nights",
      budget: "৳14,000 per person",
      maxPeople: 10,
      currentJoined: 6,
      startDate: "20 Mar 2025",
      description: "বাংলাদেশের একমাত্র coral island। Crystal clear water, coral reef এবং fresh seafood।",
      itinerary: ["Day 1: Dhaka to Teknaf, Ship to St. Martin", "Day 2: Island exploration, Snorkeling", "Day 3: Return journey"],
      comments: [
        { id: 1, user: "শাহরিয়ার রহমান", text: "Sea sickness এর জন্য কি ব্যবস্থা?", time: "12 hours ago" }
      ],
      interestedUsers: ["শাহরিয়ার রহমান", "তাসনিম আক্তার", "মাহফুজ আলম", "লামিয়া খান"]
    },
    {
      id: 8,
      title: "Paharpur Buddhist Vihara",
      organizer: "ড. আনিসুজ্জামান",
      location: "Naogaon",
      duration: "2 Days 1 Night",
      budget: "৳5,000 per person",
      maxPeople: 15,
      currentJoined: 8,
      startDate: "25 Mar 2025",
      description: "UNESCO World Heritage Site পাহাড়পুর বৌদ্ধ বিহার এবং আশেপাশের ঐতিহাসিক স্থান।",
      itinerary: ["Day 1: Dhaka to Naogaon, Paharpur visit", "Day 2: Local archaeological sites, Return"],
      comments: [],
      interestedUsers: ["ফরিদ আহমেদ", "শাহনাজ পারভীন", "আব্দুল কাদের"]
    },
    {
      id: 9,
      title: "Chittagong Hill Tracts",
      organizer: "অংকুর বড়ুয়া",
      location: "Khagrachari",
      duration: "5 Days 4 Nights",
      budget: "৳20,000 per person",
      maxPeople: 8,
      currentJoined: 2,
      startDate: "1 Apr 2025",
      description: "পাহাড়ি অঞ্চলের উপজাতীয় সংস্কৃতি, আলুটিলা গুহা, waterfall এবং natural beauty।",
      itinerary: ["Day 1: Dhaka to Khagrachari", "Day 2-4: Hill exploration", "Day 5: Return"],
      comments: [
        { id: 1, user: "মিম আক্তার", text: "Single girls এর জন্য safe?", time: "2 days ago" }
      ],
      interestedUsers: ["মিম আক্তার", "রায়হান চৌধুরী"]
    },
    {
      id: 10,
      title: "Kuakata Sea Beach Sunset",
      organizer: "সাকিব হাসান",
      location: "Kuakata",
      duration: "2 Days 1 Night",
      budget: "৳6,000 per person",
      maxPeople: 12,
      currentJoined: 9,
      startDate: "8 Apr 2025",
      description: "সূর্যোদয় ও সূর্যাস্ত দুটোই দেখা যায় এমন বিরল সমুদ্র সৈকত। Rakhine cultural show included।",
      itinerary: ["Day 1: Dhaka to Kuakata, Sunset view", "Day 2: Sunrise, Rakhine village, Return"],
      comments: [
        { id: 1, user: "তামান্না আফরিন", text: "Photography এর জন্য perfect!", time: "8 hours ago" }
      ],
      interestedUsers: ["তামান্না আফরিন", "ইকবাল হোসেন", "রুমা বেগম"]
    },
    {
      id: 11,
      title: "Srimangal Tea Capital Tour",
      organizer: "প্রদীপ কুমার দাস",
      location: "Srimangal",
      duration: "3 Days 2 Nights",
      budget: "৳9,500 per person",
      maxPeople: 10,
      currentJoined: 4,
      startDate: "12 Apr 2025",
      description: "চা রাজধানী শ্রীমঙ্গলে 7 layer tea, Lawachara National Park এবং tribal village visit।",
      itinerary: ["Day 1: Dhaka to Srimangal", "Day 2: Tea gardens, Lawachara", "Day 3: Tribal culture, Return"], 
      comments: [
        { id: 1, user: "নুসরাত জাহান", text: "বৃষ্টির সময় কি করব?", time: "1 day ago" }
      ],
      interestedUsers: ["নুসরাত জাহান", "হাবিব উল্লাহ"]
    },
    {
      id: 12,
      title: "Mahasthangarh Ancient City",
      organizer: "অধ্যাপক রশিদ হাসান",
      location: "Bogura",
      duration: "2 Days 1 Night", 
      budget: "৳4,500 per person",
      maxPeople: 20,
      currentJoined: 12,
      startDate: "18 Apr 2025",
      description: "বাংলাদেশের প্রাচীনতম শহর মহাস্থানগড় এবং আশেপাশের ঐতিহাসিক নিদর্শন।",
      itinerary: ["Day 1: Dhaka to Bogura, Mahasthangarh", "Day 2: Museum, Return"],
      comments: [],
      interestedUsers: ["শামীম আক্তার", "মাসুদ রানা", "সেলিনা খাতুন", "আরিফ হোসেন"]
    },
    {
      id: 13,
      title: "Jaflong Stone Collection",
      organizer: "রাজীব চৌধুরী", 
      location: "Jaflong, Sylhet",
      duration: "3 Days 2 Nights",
      budget: "৳11,000 per person",
      maxPeople: 8,
      currentJoined: 3,
      startDate: "25 Apr 2025",
      description: "জাফলং এর পাথর সংগ্রহ দেখা, Khasi village এবং crystal clear Piain river।",
      itinerary: ["Day 1: Dhaka to Sylhet to Jaflong", "Day 2: Stone quarry, Khasi village", "Day 3: Return"],
      comments: [
        { id: 1, user: "কবীর উদ্দিন", text: "Border area তে কি problem হবে?", time: "3 days ago" }
      ],
      interestedUsers: ["কবীর উদ্দিন", "শাহানা পারভীন"]  
    },
    {
      id: 14,
      title: "Sitakunda Eco Park Adventure",
      organizer: "বিপ্লব দাস",
      location: "Sitakunda",
      duration: "2 Days 1 Night",
      budget: "৳5,500 per person", 
      maxPeople: 15,
      currentJoined: 7,
      startDate: "2 May 2025",
      description: "Chandranath hill, botanical garden, waterfall এবং adventure activities।",
      itinerary: ["Day 1: Dhaka to Sitakunda, Hill climbing", "Day 2: Botanical garden, Return"],
      comments: [
        { id: 1, user: "রিফাত আলম", text: "Trekking shoes লাগবে?", time: "4 hours ago" }
      ],
      interestedUsers: ["রিফাত আলম", "সুমাইয়া খান", "জসিম উদ্দিন"]
    },
    {
      id: 15,
      title: "Barisal Floating Market",
      organizer: "আল-আমিন শেখ",
      location: "Barisal", 
      duration: "2 Days 1 Night",
      budget: "৳6,500 per person",
      maxPeople: 12,
      currentJoined: 5,
      startDate: "8 May 2025",
      description: "ভাসমান বাজার, গুয়াবা বাগান এবং river cruise। Local খাবারের স্বাদ নিন।",
      itinerary: ["Day 1: Dhaka to Barisal, Floating market", "Day 2: Guava gardens, Return"],
      comments: [],
      interestedUsers: ["সালমা খাতুন", "ফয়সাল আহমেদ", "রেবেকা সুলতানা"]
    },
    {
      id: 16,
      title: "Teknaf Beach & Myanmar Border",
      organizer: "জাহাঙ্গীর আলম",
      location: "Teknaf",
      duration: "3 Days 2 Nights", 
      budget: "৳10,000 per person",
      maxPeople: 10,
      currentJoined: 6,
      startDate: "15 May 2025",
      description: "বাংলাদেশের সর্বদক্ষিণের সৈকত, Myanmar border এবং সমুদ্র সৈকতে seafood।",
      itinerary: ["Day 1: Dhaka to Teknaf", "Day 2: Beach activities, Border visit", "Day 3: Return"],
      comments: [
        { id: 1, user: "নাহিদ হাসান", text: "Border crossing যাওয়া যাবে?", time: "6 hours ago" }
      ],
      interestedUsers: ["নাহিদ হাসান", "সাবিনা ইয়াসমিন", "করিম উল্লাহ"]
    }
  ]);

   const [joinedPlans, setJoinedPlans] = useState(new Set());
  const [showJoinForm, setShowJoinForm] = useState(null);
  const [showComments, setShowComments] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [joinFormData, setJoinFormData] = useState({
    name: '',
    phone: '',
    email: '',
    emergencyContact: '',
    message: ''
  });

  const [newPlanData, setNewPlanData] = useState({
    title: '',
    organizer: '',
    location: '',
    duration: '',
    budget: '',
    maxPeople: '',
    startDate: '',
    description: '',
    itinerary: ['', '', '']
  });

  const handleJoinClick = (planId) => {
    if (joinedPlans.has(planId)) return;
    setShowJoinForm(planId);
  };

  const handleJoinSubmit = (planId) => {
    setJoinedPlans(prev => new Set([...prev, planId]));
    setTourPlans(prev => prev.map(plan => 
      plan.id === planId 
        ? { ...plan, currentJoined: plan.currentJoined + 1 }
        : plan
    ));
    setShowJoinForm(null);
    setJoinFormData({ name: '', phone: '', email: '', emergencyContact: '', message: '' });
  };

  const handleCommentSubmit = (planId) => {
    if (!newComment.trim()) return;
    
    setTourPlans(prev => prev.map(plan => 
      plan.id === planId 
        ? { 
            ...plan, 
            comments: [...plan.comments, {
              id: Date.now(),
              user: "আপনি", 
              text: newComment,
              time: "Just now"
            }]
          }
        : plan
    ));
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Tour Plan Share করুন
              </h1>
              <p className="text-gray-600 mt-1">আপনার ভ্রমণ পরিকল্পনা share করুন এবং সাথী খুঁজুন</p>
            </div>
            <button 
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add New Plan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tour Plans */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {tourPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Side - Plan Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                        <p className="text-blue-600 font-medium">Organized by: {plan.organizer}</p>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-lg mb-2">
                          {plan.budget}
                        </div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{plan.description}</p>

                    {/* Plan Info Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin size={18} className="text-blue-500" />
                        <div>
                          <div className="text-sm text-gray-500">Location</div>
                          <div className="font-medium">{plan.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar size={18} className="text-green-500" />
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div className="font-medium">{plan.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users size={18} className="text-purple-500" />
                        <div>
                          <div className="text-sm text-gray-500">Group Size</div>
                          <div className="font-medium">{plan.currentJoined}/{plan.maxPeople} joined</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar size={18} className="text-orange-500" />
                        <div>
                          <div className="text-sm text-gray-500">Start Date</div>
                          <div className="font-medium">{plan.startDate}</div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Spots Filled</span>
                        <span>{plan.currentJoined}/{plan.maxPeople}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(plan.currentJoined / plan.maxPeople) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Itinerary:</h4>
                      <ul className="space-y-1">
                        {plan.itinerary.map((item, index) => (
                          <li key={index} className="text-sm text-gray-600">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Interested Users */}
                    {plan.interestedUsers.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Eye size={16} className="text-blue-500" />
                          <span className="text-sm font-medium text-gray-700">
                            {plan.interestedUsers.length} জন interested:
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {plan.interestedUsers.map((user, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                              {user}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Actions */}
                  <div className="lg:w-80">
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-gray-800 mb-1">
                          {plan.maxPeople - plan.currentJoined} spots left
                        </div>
                        <div className="text-sm text-gray-600">out of {plan.maxPeople} total</div>
                      </div>

                      {joinedPlans.has(plan.id) ? (
                        <div className="bg-green-500 text-white text-center py-4 rounded-lg mb-4 flex items-center justify-center space-x-2">
                          <CheckCircle size={20} />
                          <span className="font-medium">You already joined this tour!</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleJoinClick(plan.id)}
                          disabled={plan.currentJoined >= plan.maxPeople}
                          className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                            plan.currentJoined >= plan.maxPeople
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-lg transform hover:scale-105'
                          }`}
                        >
                          <UserPlus size={20} />
                          <span>
                            {plan.currentJoined >= plan.maxPeople ? 'Tour Full' : 'Join This Tour'}
                          </span>
                        </button>
                      )}

                      <button
                        onClick={() => setShowComments(showComments === plan.id ? null : plan.id)}
                        className="w-full bg-white text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 border"
                      >
                        <MessageCircle size={18} />
                        <span>Comments ({plan.comments.length})</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                {showComments === plan.id && (
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Comments & Questions</h4>
                    
                    {/* Existing Comments */}
                    <div className="space-y-4 mb-4">
                      {plan.comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-gray-800">{comment.user}</span>
                            <span className="text-xs text-gray-500">{comment.time}</span>
                          </div>
                          <p className="text-gray-700">{comment.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Add Comment */}
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="আপনার প্রশ্ন বা মন্তব্য লিখুন..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyPress={(e) => e.key === 'Enter' && handleCommentSubmit(plan.id)}
                      />
                      <button
                        onClick={() => handleCommentSubmit(plan.id)}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                      >
                        <Send size={18} />
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Join Form Modal */}
              {showJoinForm === plan.id && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">Join Tour Plan</h3>
                        <button
                          onClick={() => setShowJoinForm(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <X size={24} />
                        </button>
                      </div>

                      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">{plan.title}</h4>
                        <div className="text-sm text-blue-600 space-y-1">
                          <div>📍 {plan.location}</div>
                          <div>📅 {plan.startDate}</div>
                          <div>💰 {plan.budget}</div>
                          <div>⏱️ {plan.duration}</div>
                        </div>
                      </div>

                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            আপনার নাম *
                          </label>
                          <input
                            type="text"
                            value={joinFormData.name}
                            onChange={(e) => setJoinFormData({...joinFormData, name: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="আপনার পূর্ণ নাম লিখুন"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            মোবাইল নম্বর *
                          </label>
                          <input
                            type="tel"
                            value={joinFormData.phone}
                            onChange={(e) => setJoinFormData({...joinFormData, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="01xxxxxxxxx"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            ইমেইল *
                          </label>
                          <input
                            type="email"
                            value={joinFormData.email}
                            onChange={(e) => setJoinFormData({...joinFormData, email: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your@email.com"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            জরুরি যোগাযোগ (Emergency Contact) *
                          </label>
                          <input
                            type="tel"
                            value={joinFormData.emergencyContact}
                            onChange={(e) => setJoinFormData({...joinFormData, emergencyContact: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="পরিবারের কারো নম্বর"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            অতিরিক্ত তথ্য (Optional)
                          </label>
                          <textarea
                            value={joinFormData.message}
                            onChange={(e) => setJoinFormData({...joinFormData, message: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                            placeholder="কোন বিশেষ প্রয়োজন বা প্রশ্ন থাকলে লিখুন..."
                          />
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-sm text-yellow-800">
                            <strong>লক্ষ্য করুন:</strong> Join করার পর organizer আপনার সাথে যোগাযোগ করবেন। 
                            Tour এর সব details এবং payment information শেয়ার করা হবে।
                          </p>
                        </div>

                        <div className="flex space-x-3 pt-4">
                          <button
                            type="button"
                            onClick={() => setShowJoinForm(null)}
                            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => handleJoinSubmit(plan.id)}
                            disabled={!joinFormData.name || !joinFormData.phone || !joinFormData.email || !joinFormData.emergencyContact}
                            className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                          >
                            Join Tour
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-lg">
            আরো Tour Plan দেখুন
          </button>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">16+</div>
              <div className="text-green-100">Active Tour Plans</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">80+</div>
              <div className="text-green-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-green-100">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-green-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">কিভাবে কাজ করে?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">১. Plan Browse করুন</h3>
              <p className="text-gray-600 text-sm">আপনার পছন্দের destination এর tour plan খুঁজুন</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">২. Comment করুন</h3>
              <p className="text-gray-600 text-sm">প্রশ্ন করুন এবং organizer এর সাথে কথা বলুন</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">৩. Join করুন</h3>
              <p className="text-gray-600 text-sm">Form fill করে tour এ join করুন এবং adventure শুরু করুন</p>
            </div>
          </div>
        </div>
      </div>
      {/* Add New Plan Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Create New Tour Plan</h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tour Title *
                  </label>
                  <input
                    type="text"
                    value={newPlanData.title}
                    onChange={(e) => setNewPlanData({...newPlanData, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. Sydney Adventure"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organizer Name *
                  </label>
                  <input
                    type="text"
                    value={newPlanData.organizer}
                    onChange={(e) => setNewPlanData({...newPlanData, organizer: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={newPlanData.location}
                    onChange={(e) => setNewPlanData({...newPlanData, location: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. Sydney, Australia"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={newPlanData.duration}
                    onChange={(e) => setNewPlanData({...newPlanData, duration: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. 3 Days 2 Nights"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget per Person *
                  </label>
                  <input
                    type="text"
                    value={newPlanData.budget}
                    onChange={(e) => setNewPlanData({...newPlanData, budget: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. $450 per person"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum People
                  </label>
                  <input
                    type="number"
                    value={newPlanData.maxPeople}
                    onChange={(e) => setNewPlanData({...newPlanData, maxPeople: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. 10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={newPlanData.startDate}
                    onChange={(e) => setNewPlanData({...newPlanData, startDate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g. 15 Mar 2025"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newPlanData.description}
                  onChange={(e) => setNewPlanData({...newPlanData, description: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-24 resize-none"
                  placeholder="Describe your tour plan, what's included, highlights..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Itinerary
                </label>
                <div className="space-y-2">
                  {newPlanData.itinerary.map((day, index) => (
                    <input
                      key={index}
                      type="text"
                      value={day}
                      onChange={(e) => {
                        const newItinerary = [...newPlanData.itinerary];
                        newItinerary[index] = e.target.value;
                        setNewPlanData({...newPlanData, itinerary: newItinerary});
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder={`Day ${index + 1}: What happens on this day?`}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => setNewPlanData({
                      ...newPlanData, 
                      itinerary: [...newPlanData.itinerary, '']
                    })}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center space-x-1"
                  >
                    <Plus size={16} />
                    <span>Add another day</span>
                  </button>
                </div>
              </div>

              <div className="flex space-x-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!newPlanData.title || !newPlanData.organizer || !newPlanData.location || !newPlanData.budget) {
                      alert('Please fill in all required fields');
                      return;
                    }

                    const newPlan = {
                      id: Date.now(),
                      ...newPlanData,
                      maxPeople: parseInt(newPlanData.maxPeople) || 10,
                      currentJoined: 0,
                      comments: []
                    };

                    setTourPlans(prev => [newPlan, ...prev]);
                    setNewPlanData({
                      title: '',
                      organizer: '',
                      location: '',
                      duration: '',
                      budget: '',
                      maxPeople: '',
                      startDate: '',
                      description: '',
                      itinerary: ['', '', '']
                    });
                    setShowAddForm(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Create Tour Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SharePlanTourPage;