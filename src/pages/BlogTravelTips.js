import { useState } from "react";
import {
  MapPin,
  Users,
  Backpack,
  Globe,
  Heart,
  Search,
  ChevronRight,
  Star,
  Clock,
  User,
  Camera,
  Mountain,
  TreePine,
  Coffee,
  Wifi,
  Eye,
  Share2,
  Bookmark,
} from "lucide-react";
import { Link } from "react-router-dom";

const BlogTravelTips = () => {
  const [activeTab, setActiveTab] = useState("articles");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState(new Set());

  // Expanded articles data with 18 cards
  const articles = [
    {
      id: 1,
      title:
        "Hidden Gems of Southeast Asia: 15 Destinations Off the Beaten Path",
      excerpt:
        "Discover secret beaches, ancient temples, and local markets that most tourists never see. From Myanmar's forgotten cities to Philippines' untouched islands, explore the region's best-kept secrets.",
      image:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&h=250&fit=crop",
      category: "destinations",
      author: "Sarah Chen",
      date: "2024-07-15",
      readTime: "8 min read",
      views: "12.5k",
      tags: ["Southeast Asia", "Hidden Gems", "Adventure"],
      rating: 4.9,
      difficulty: "Intermediate",
      budget: "$50-100/day",
    },
    {
      id: 2,
      title:
        "Budget Backpacking Through Europe: $30/Day Challenge Complete Guide",
      excerpt:
        "Master the art of ultra-budget travel across 12 European cities. Includes accommodation hacks, free attractions, meal strategies, and a detailed daily breakdown of expenses.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
      category: "budget",
      author: "Marco Rodriguez",
      date: "2024-07-12",
      readTime: "12 min read",
      views: "8.7k",
      tags: ["Europe", "Budget Travel", "Backpacking"],
      rating: 4.7,
      difficulty: "Beginner",
      budget: "$30/day",
    },
    {
      id: 3,
      title:
        "Digital Nomad's Complete Guide to Bali: Coworking, WiFi & Community",
      excerpt:
        "Everything you need to work remotely from Bali. WiFi speeds tested at 50+ locations, visa requirements, cost of living breakdown, and best neighborhoods for nomads.",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
      category: "digital-nomad",
      author: "Alex Kumar",
      date: "2024-07-10",
      readTime: "10 min read",
      views: "15.2k",
      tags: ["Bali", "Digital Nomad", "Remote Work"],
      rating: 4.8,
      difficulty: "Intermediate",
      budget: "$800-1200/month",
    },
    {
      id: 4,
      title: "Japanese Ryokan Experience: Traditional Hospitality Deep Dive",
      excerpt:
        "Immerse yourself in centuries-old Japanese hospitality traditions. Complete guide to ryokan etiquette, what to expect, seasonal kaiseki meals, and onsen culture.",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop",
      category: "culture",
      author: "Yuki Tanaka",
      date: "2024-07-08",
      readTime: "9 min read",
      views: "6.3k",
      tags: ["Japan", "Ryokan", "Culture", "Hospitality"],
      rating: 4.9,
      difficulty: "Advanced",
      budget: "$200-500/night",
    },
    {
      id: 5,
      title: "Patagonia Trekking: Complete W Circuit & Torres del Paine Guide",
      excerpt:
        "Conquer one of the world's most spectacular treks. Detailed day-by-day itinerary, gear recommendations, weather patterns, and emergency protocols for the famous W Circuit.",
      image: "https://picsum.photos/400/250?random=5",
      category: "adventure",
      author: "Carlos Mendez",
      date: "2024-07-05",
      readTime: "15 min read",
      views: "9.1k",
      tags: ["Patagonia", "Trekking", "Adventure", "Mountains"],
      rating: 4.8,
      difficulty: "Expert",
      budget: "$100-150/day",
    },
    {
      id: 6,
      title:
        "Moroccan Medina Navigation: Fez, Marrakech & Meknes Insider Guide",
      excerpt:
        "Navigate ancient medinas like a local. Street-by-street guides, bargaining strategies, hidden riads, authentic restaurants, and cultural etiquette for Morocco's imperial cities.",
      image: "https://picsum.photos/400/250?random=6",
      category: "destinations",
      author: "Amina Hassan",
      date: "2024-07-03",
      readTime: "11 min read",
      views: "7.8k",
      tags: ["Morocco", "Medina", "Culture", "Markets"],
      rating: 4.6,
      difficulty: "Intermediate",
      budget: "$40-80/day",
    },
    {
      id: 7,
      title: "New Zealand Road Trip: North to South Island Complete Itinerary",
      excerpt:
        "Epic 3-week road trip covering both islands. Scenic routes, camping spots, adventure activities, Lord of the Rings filming locations, and budget breakdowns.",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=250&fit=crop",
      category: "destinations",
      author: "Emma Thompson",
      date: "2024-07-01",
      readTime: "13 min read",
      views: "11.4k",
      tags: ["New Zealand", "Road Trip", "Adventure", "Nature"],
      rating: 4.9,
      difficulty: "Intermediate",
      budget: "$80-120/day",
    },
    {
      id: 8,
      title:
        "Solo Female Travel in India: Safety, Culture & Incredible Experiences",
      excerpt:
        "Comprehensive guide for women traveling alone in India. Safety protocols, cultural dress codes, recommended destinations, and inspiring stories from female travelers.",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=250&fit=crop",
      category: "culture",
      author: "Priya Sharma",
      date: "2024-06-28",
      readTime: "14 min read",
      views: "13.7k",
      tags: ["India", "Solo Travel", "Female Travel", "Safety"],
      rating: 4.7,
      difficulty: "Advanced",
      budget: "$25-50/day",
    },
    {
      id: 9,
      title:
        "Arctic Circle Adventure: Northern Lights & Midnight Sun in Lapland",
      excerpt:
        "Chase the aurora borealis and experience polar phenomena. Best viewing locations, photography techniques, Sami culture immersion, and seasonal activity guides.",
      image:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&h=250&fit=crop",
      category: "adventure",
      author: "Lars Eriksson",
      date: "2024-06-25",
      readTime: "10 min read",
      views: "8.9k",
      tags: ["Arctic", "Northern Lights", "Lapland", "Photography"],
      rating: 4.8,
      difficulty: "Advanced",
      budget: "$150-250/day",
    },
    {
      id: 10,
      title: "Street Food Safari: Bangkok's Best Hidden Food Courts & Markets",
      excerpt:
        "Dive deep into Bangkok's incredible street food scene. Detailed market guides, must-try dishes, food safety tips, vegetarian options, and local eating customs.",
      image:
        "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=400&h=250&fit=crop",
      category: "food",
      author: "Siriporn Wijit",
      date: "2024-06-22",
      readTime: "7 min read",
      views: "16.8k",
      tags: ["Bangkok", "Street Food", "Markets", "Thai Cuisine"],
      rating: 4.9,
      difficulty: "Beginner",
      budget: "$10-20/day",
    },
    {
      id: 11,
      title: "Minimalist Travel: One Carry-On for Months of Adventure",
      excerpt:
        "Master ultra-light travel with capsule wardrobe strategies, multi-purpose gear recommendations, laundry hacks, and psychological tips for letting go of travel excess.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop",
      category: "budget",
      author: "Jordan Kim",
      date: "2024-06-20",
      readTime: "9 min read",
      views: "14.2k",
      tags: [
        "Minimalism",
        "Packing",
        "Carry-On",
        "Travel Gear",
        "Budget Friendly",
      ],
      rating: 4.6,
      difficulty: "Intermediate",
      budget: "Various",
    },
    {
      id: 12,
      title:
        "African Safari Planning: Kenya vs Tanzania vs Botswana Comparison",
      excerpt:
        "Choose your perfect African safari experience. Detailed comparison of wildlife, seasons, costs, accessibility, luxury vs budget options, and conservation efforts.",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop",
      category: "wildlife",
      author: "David Ochieng",
      date: "2024-06-18",
      readTime: "12 min read",
      views: "10.5k",
      tags: ["Africa", "Safari", "Wildlife", "Kenya", "Tanzania"],
      rating: 4.8,
      difficulty: "Intermediate",
      budget: "$200-800/day",
    },
    {
      id: 13,
      title: "Central America Overland: Guatemala to Panama Border-to-Border",
      excerpt:
        "Epic overland journey through Central America. Border crossing procedures, transportation options, safety considerations, cultural highlights, and budget breakdowns.",
      image: "https://picsum.photos/400/250?random=11",
      category: "wildlife",
      author: "Isabella Gutierrez",
      date: "2024-06-15",
      readTime: "16 min read",
      views: "5.7k",
      tags: ["Central America", "Overland", "Backpacking", "Culture"],
      rating: 4.7,
      difficulty: "Advanced",
      budget: "$35-60/day",
    },
    {
      id: 14,
      title: "Digital Detox Retreats: Unplugging in Remote Mountain Villages",
      excerpt:
        "Disconnect to reconnect with nature. Curated list of remote mountain retreats, monastery stays, meditation centers, and eco-lodges where WiFi doesn't reach.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      category: "wellness",
      author: "Michael Chen",
      date: "2024-06-12",
      readTime: "8 min read",
      views: "9.3k",
      tags: ["Digital Detox", "Wellness", "Mountains", "Meditation"],
      rating: 4.5,
      difficulty: "Beginner",
      budget: "$50-200/day",
    },
    {
      id: 15,
      title: "Photography Road Trip: Capturing Iceland's Raw Natural Beauty",
      excerpt:
        "Master landscape photography in Iceland's otherworldly terrain. Technical camera settings, composition techniques, seasonal lighting, and insider locations for epic shots.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      category: "photography",
      author: "Sigrid Bjornsson",
      date: "2024-06-10",
      readTime: "11 min read",
      views: "12.1k",
      tags: ["Iceland", "Photography", "Landscape", "Road Trip"],
      rating: 4.9,
      difficulty: "Advanced",
      budget: "$120-180/day",
    },
    {
      id: 16,
      title: "Scuba Diving Paradise: Maldives vs Great Barrier Reef vs Red Sea",
      excerpt:
        "Compare the world's top diving destinations. Marine life guides, diving seasons, certification requirements, underwater photography tips, and conservation awareness.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      category: "adventure",
      author: "Captain Marina Rodriguez",
      date: "2024-06-08",
      readTime: "13 min read",
      views: "8.4k",
      tags: ["Scuba Diving", "Maldives", "Great Barrier Reef", "Marine Life"],
      rating: 4.8,
      difficulty: "Intermediate",
      budget: "$150-400/day",
    },
    {
      id: 17,
      title: "Trans-Siberian Railway: Moscow to Vladivostok Epic Journey",
      excerpt:
        "Embark on the world's longest railway journey. Complete guide to routes, stops, accommodation options, visa requirements, cultural experiences, and survival tips.",
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop",
      category: "destinations",
      author: "Alexei Volkov",
      date: "2024-06-05",
      readTime: "18 min read",
      views: "7.2k",
      tags: ["Trans-Siberian", "Russia", "Train Travel", "Epic Journey"],
      rating: 4.7,
      difficulty: "Advanced",
      budget: "$60-120/day",
    },
    {
      id: 18,
      title: "Culinary Journey Through Vietnam: From North to South",
      excerpt:
        "Explore Vietnam's incredible food diversity. Regional specialties, cooking classes, market tours, street food safety, vegetarian options, and food photography tips.",
      image:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=250&fit=crop",
      category: "food",
      author: "Linh Nguyen",
      date: "2024-06-03",
      readTime: "10 min read",
      views: "11.6k",
      tags: ["Vietnam", "Food Culture", "Street Food", "Cooking"],
      rating: 4.8,
      difficulty: "Beginner",
      budget: "$20-40/day",
    },
  ];

  // Expanded packing tips with additional guides
  const packingTips = [
    {
      id: 1,
      title: "Ultimate Carry-On Packing Master List",
      category: "essentials",
      description:
        "Everything you need for weeks of travel in just one carry-on bag",
      items: [
        {
          name: "Passport & Travel Documents",
          essential: true,
          weight: "0.1kg",
          notes: "Keep in waterproof document organizer",
        },
        {
          name: "Universal Travel Adapter with USB-C",
          essential: true,
          weight: "0.3kg",
          notes: "Works in 150+ countries",
        },
        {
          name: "Portable Charger (20,000mAh)",
          essential: true,
          weight: "0.4kg",
          notes: "Airline approved, charges phone 4-6 times",
        },
        {
          name: "Quick-dry Travel Towel",
          essential: false,
          weight: "0.2kg",
          notes: "Microfiber, packs to tennis ball size",
        },
        {
          name: "Compression Packing Cubes Set",
          essential: true,
          weight: "0.5kg",
          notes: "Saves 30% space, keeps organized",
        },
        {
          name: "Comprehensive First Aid Kit",
          essential: true,
          weight: "0.3kg",
          notes: "Include prescription meds, pain relievers",
        },
        {
          name: "Multi-tool with Knife",
          essential: false,
          weight: "0.2kg",
          notes: "TSA-approved for checked bags only",
        },
        {
          name: "Portable Water Filter",
          essential: false,
          weight: "0.1kg",
          notes: "LifeStraw or similar for sketchy water",
        },
      ],
      tips: [
        "Roll clothes instead of folding to save 30% more space",
        "Wear your heaviest shoes and jacket on the plane",
        "Pack one complete outfit in your carry-on in case checked bag is lost",
        "Bring empty water bottle to fill after security - saves $5-10 per airport",
        "Use hotel shower caps to wrap dirty shoes",
        "Stuff socks and underwear inside your shoes to maximize space",
      ],
    },
    {
      id: 2,
      title: "Climate-Specific Packing Masterclass",
      category: "climate",
      description:
        "Detailed packing strategies for every climate zone on Earth",
      climates: [
        {
          type: "Tropical (Hot & Humid)",
          temperature: "25-35°C (77-95°F)",
          humidity: "70-90%",
          essentials: [
            "Lightweight, breathable fabrics (linen, merino wool)",
            "DEET-based insect repellent (30% minimum)",
            "Waterproof phone case with lanyard",
            "Ventilated hiking sandals",
            "Quick-dry shorts and shirts",
            "Lightweight rain poncho",
          ],
          avoid: [
            "Heavy jeans",
            "Dark colors that absorb heat",
            "Cotton socks (take forever to dry)",
            "Leather shoes",
          ],
        },
        {
          type: "Arctic/Sub-Zero",
          temperature: "-20 to 5°C (-4 to 41°F)",
          humidity: "Low",
          essentials: [
            "Merino wool base layers (top and bottom)",
            "Insulated, waterproof boots rated to -40°C",
            "3-layer waterproof outer shell system",
            "Chemical hand and foot warmers",
            "Insulated gloves with liner gloves",
            "Balaclava or face mask",
          ],
          avoid: [
            "Cotton clothing (deadly when wet)",
            "Non-waterproof gear",
            "Single-layer clothing",
            "Fashion boots",
          ],
        },
        {
          type: "Desert (Hot & Dry)",
          temperature: "35-50°C (95-122°F) day, 5-20°C (41-68°F) night",
          humidity: "10-30%",
          essentials: [
            "Long-sleeve UV protection shirts (UPF 50+)",
            "Wide-brimmed hat with chin strap",
            "Electrolyte replacement tablets",
            "Closed-toe shoes (sand protection)",
            "Lightweight pants for sun protection",
            "Emergency whistle and mirror",
          ],
          avoid: [
            "Shorts only",
            "Dark clothing",
            "Heavy fabrics",
            "Open-toed shoes",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Tech Nomad Gear Setup",
      category: "digital",
      description: "Complete tech setup for productive remote work anywhere",
      items: [
        {
          name: "Laptop (13-14 inch max)",
          essential: true,
          weight: "1.2-1.5kg",
          notes: "MacBook Air M2 or ThinkPad X1 Carbon",
        },
        {
          name: 'Portable Monitor (15.6")',
          essential: false,
          weight: "0.8kg",
          notes: "USB-C powered, increases productivity 40%",
        },
        {
          name: "Mechanical Keyboard (60%)",
          essential: false,
          weight: "0.6kg",
          notes: "Keychron K3 or similar compact",
        },
        {
          name: "Wireless Mouse",
          essential: true,
          weight: "0.1kg",
          notes: "Logitech MX Anywhere 3",
        },
        {
          name: "Noise-Canceling Headphones",
          essential: true,
          weight: "0.3kg",
          notes: "Sony WH-1000XM4 or Bose QuietComfort",
        },
        {
          name: "Webcam (4K)",
          essential: false,
          weight: "0.2kg",
          notes: "For professional video calls",
        },
        {
          name: "Ring Light (Portable)",
          essential: false,
          weight: "0.3kg",
          notes: "Clip-on for better video lighting",
        },
      ],
      tips: [
        "Invest in quality cables - they break most often",
        "Download offline maps and translate apps before traveling",
        "Use cloud storage exclusively - no local files",
        "Test all gear thoroughly before major trips",
        "Keep cable organizer pouch for easy access",
        "Backup power bank specifically for laptop charging",
      ],
    },
  ];

  // Enhanced cultural guides
  const culturalGuides = [
    {
      id: 1,
      country: "Japan",
      flag: "🇯🇵",
      title: "Mastering Japanese Etiquette & Social Customs",
      overview:
        "Japan is a culture of subtlety, respect, and ancient traditions. Understanding basic etiquette will enhance your experience and show respect for local customs.",
      sections: [
        {
          title: "Greetings & Social Interactions",
          content:
            "Bowing is the cornerstone of Japanese social interaction. The depth and duration of your bow indicates the level of respect. A slight bow (15°) works for casual greetings, while a deeper bow (30°) shows formal respect.",
          dos: [
            "Remove shoes when entering homes, temples, and traditional restaurants",
            "Bow when meeting someone new or saying goodbye",
            "Use both hands when exchanging business cards and study them briefly",
            "Wait to be seated at restaurants",
            "Keep your voice down on public transportation",
          ],
          donts: [
            "Point at people or things with one finger (use open hand)",
            "Blow your nose in public (excuse yourself to a bathroom)",
            "Talk loudly in public spaces",
            "Touch someone without permission",
            "Wear shoes inside homes or temples",
          ],
        },
        {
          title: "Dining Etiquette & Food Culture",
          content:
            "Japanese dining is ritualistic and respectful. Say 'Itadakimasu' (I humbly receive) before eating and 'Gochisousama' (thank you for the feast) after finishing.",
          dos: [
            "Slurp noodles loudly - it shows appreciation and cools them down",
            "Finish everything on your plate - leaving food is wasteful",
            "Pour drinks for others at your table, never your own",
            "Use chopsticks properly and place them on the rest when not eating",
            "Try everything offered to you",
          ],
          donts: [
            "Tip at restaurants (it's not customary and can be offensive)",
            "Pass food directly from chopstick to chopstick",
            "Stick chopsticks upright in rice (resembles funeral incense)",
            "Add soy sauce directly to rice",
            "Eat while walking (except at festivals)",
          ],
        },
      ],
      keyPhrases: [
        {
          phrase: "Arigatou gozaimasu",
          meaning: "Thank you very much",
          pronunciation: "ah-ree-gah-toh go-zah-ee-mahs",
          usage: "Formal situations",
        },
        {
          phrase: "Sumimasen",
          meaning: "Excuse me/Sorry",
          pronunciation: "soo-mee-mah-sen",
          usage: "Getting attention, apologizing",
        },
        {
          phrase: "Eigo wo hanasemasu ka?",
          meaning: "Do you speak English?",
          pronunciation: "eh-go wo hah-nah-seh-mahs kah",
          usage: "When you need help",
        },
        {
          phrase: "Oishi desu",
          meaning: "It's delicious",
          pronunciation: "oh-ee-shee dess",
          usage: "Complimenting food",
        },
      ],
    },
    {
      id: 2,
      country: "Morocco",
      flag: "🇲🇦",
      title: "Navigating Moroccan Culture & Islamic Customs",
      overview:
        "Morocco blends Arab, Berber, and French influences in a deeply Islamic society. Respect for religious customs and understanding of local social norms will enrich your experience.",
      sections: [
        {
          title: "Religious Considerations & Dress Code",
          content:
            "Morocco is 99% Muslim with strong religious traditions. Respect Islamic customs, especially during Ramadan. Dress modestly, particularly when visiting mosques or rural areas.",
          dos: [
            "Dress conservatively - cover shoulders, knees, and cleavage",
            "Remove shoes before entering mosques",
            "Respect prayer times (5 times daily)",
            "Accept hospitality graciously - refusing tea is rude",
            "Use your right hand for eating and greeting",
          ],
          donts: [
            "Show the soles of your feet to others",
            "Use your left hand for eating or greeting (considered unclean)",
            "Refuse mint tea when offered - it's a sign of hospitality",
            "Eat pork or drink alcohol publicly during Ramadan",
            "Enter mosques during prayer time unless invited",
          ],
        },
        {
          title: "Market Bargaining & Shopping Etiquette",
          content:
            "Bargaining in souks (markets) is an art form and social interaction. It's expected and can be enjoyable when done respectfully. Start at 30-50% of the initial price and negotiate patiently.",
          dos: [
            "Learn basic Arabic numbers for price negotiations",
            "Walk away if the price doesn't meet your budget",
            "Show genuine interest in the craftsmanship",
            "Drink tea during negotiations - it's part of the process",
            "Be patient and friendly - rushing is rude",
          ],
          donts: [
            "Accept the first price offered",
            "Get aggressive or angry during bargaining",
            "Touch items without asking permission first",
            "Photograph people without permission",
            "Compare prices loudly in front of vendors",
          ],
        },
      ],
      keyPhrases: [
        {
          phrase: "As-salaam alaikum",
          meaning: "Peace be upon you",
          pronunciation: "as-sah-lahm ah-lay-koom",
          usage: "Traditional greeting",
        },
        {
          phrase: "Shukran",
          meaning: "Thank you",
          pronunciation: "shook-rahn",
          usage: "Expressing gratitude",
        },
        {
          phrase: "Bikam hada?",
          meaning: "How much is this?",
          pronunciation: "bee-kahm hah-dah",
          usage: "Shopping in markets",
        },
        {
          phrase: "La, shukran",
          meaning: "No, thank you",
          pronunciation: "lah, shook-rahn",
          usage: "Politely declining",
        },
      ],
    },
    {
      id: 3,
      country: "India",
      flag: "🇮🇳",
      title: "Understanding India's Complex Cultural Tapestry",
      overview:
        "India is incredibly diverse with hundreds of languages, religions, and customs varying by region. Flexibility, patience, and respect for hierarchy are essential.",
      sections: [
        {
          title: "Social Hierarchy & Religious Sensitivity",
          content:
            "India has complex social structures and multiple religions coexisting. Understanding basic concepts of respect and religious sensitivity will help you navigate social situations.",
          dos: [
            "Remove shoes before entering temples and homes",
            "Cover your head when entering Sikh temples",
            "Show respect to elders and religious figures",
            "Use 'Namaste' with palms together as a universal greeting",
            "Dress modestly, especially at religious sites",
          ],
          donts: [
            "Touch someone's head (considered sacred)",
            "Point your feet toward people or religious objects",
            "Use your left hand for eating or giving things",
            "Show affection publicly (even holding hands can be inappropriate)",
            "Wear leather items in Hindu temples",
          ],
        },
        {
          title: "Food Culture & Dining Customs",
          content:
            "Indian food culture is deeply connected to religion, region, and tradition. Many Indians are vegetarian, and food practices vary significantly across the country.",
          dos: [
            "Wash your hands before and after eating",
            "Eat with your right hand only",
            "Try local specialties - each region has unique dishes",
            "Accept food offerings graciously",
            "Ask about spice levels if you're sensitive",
          ],
          donts: [
            "Eat beef (sacred to Hindus) or pork (forbidden to Muslims)",
            "Use your left hand for eating",
            "Waste food - finish what's on your plate",
            "Drink tap water without purification",
            "Refuse food offerings at religious sites",
          ],
        },
      ],
      keyPhrases: [
        {
          phrase: "Namaste",
          meaning: "I bow to you",
          pronunciation: "nah-mas-tay",
          usage: "Universal greeting",
        },
        {
          phrase: "Dhanyawad",
          meaning: "Thank you",
          pronunciation: "dahn-ya-wahd",
          usage: "Expressing gratitude (Hindi)",
        },
        {
          phrase: "Kitna paisa?",
          meaning: "How much money?",
          pronunciation: "kit-nah pie-sah",
          usage: "Asking prices",
        },
        {
          phrase: "Samjha nahin",
          meaning: "I don't understand",
          pronunciation: "sam-jah nah-heen",
          usage: "When confused",
        },
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Articles", icon: Globe },
    { id: "destinations", name: "Destinations", icon: MapPin },
    { id: "budget", name: "Budget Travel", icon: Star },
    { id: "digital-nomad", name: "Digital Nomad", icon: Wifi },
    { id: "adventure", name: "Adventure", icon: Mountain },
    { id: "culture", name: "Culture", icon: Users },
    { id: "food", name: "Food & Cuisine", icon: Coffee },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "wildlife", name: "Wildlife", icon: TreePine },
    { id: "wellness", name: "Wellness", icon: Heart },
  ];

  const toggleFavorite = (articleId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(articleId)) {
      newFavorites.delete(articleId);
    } else {
      newFavorites.add(articleId);
    }
    setFavorites(newFavorites);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-orange-100 text-orange-800";
      case "Expert":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b">
        <div className="flex">
          {["articles", "packing", "culture"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center capitalize transition-all ${
                activeTab === tab
                  ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              {tab === "packing"
                ? "Packing"
                : tab === "culture"
                ? "Culture"
                : "Articles"}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-lg z-50 my-4 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <nav className="hidden md:flex space-x-8">
                <button
                  onClick={() => setActiveTab("articles")}
                  className={`px-6 py-2 rounded-lg transition-all font-semibold ${
                    activeTab === "articles"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Travel Articles
                </button>
                <button
                  onClick={() => setActiveTab("packing")}
                  className={`px-6 py-2 rounded-lg transition-all font-semibold ${
                    activeTab === "packing"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Packing Guides
                </button>
                <button
                  onClick={() => setActiveTab("culture")}
                  className={`px-6 py-2 rounded-lg transition-all font-semibold ${
                    activeTab === "culture"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Cultural Guides
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Articles Tab */}
        {activeTab === "articles" && (
          <div>
            {/* Enhanced Search and Filter */}
            <div className="mb-12 space-y-6">
              <div className="relative w-full mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations, tips, or experiences..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white shadow-lg text-lg"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                          : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Articles Grid with Enhanced Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  to="/blogDetails"
                  key={article.id}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={() => toggleFavorite(article.id)}
                        className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
                          favorites.has(article.id)
                            ? "bg-red-500 text-white"
                            : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
                        }`}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.has(article.id) ? "fill-current" : ""
                          }`}
                        />
                      </button>
                      <button className="p-3 rounded-full bg-white/80 text-gray-600 hover:bg-blue-500 hover:text-white backdrop-blur-md transition-all duration-300">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Difficulty Badge */}
                    {article.difficulty && (
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(
                            article.difficulty
                          )}`}
                        >
                          {article.difficulty}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    {/* Category and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-2 rounded-full">
                        {
                          categories.find((c) => c.id === article.category)
                            ?.name
                        }
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="text-sm font-bold ml-1">
                          {article.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Budget Badge */}
                    {article.budget && (
                      <div className="mb-4">
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                          💰 {article.budget}
                        </span>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Meta Info */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {article.author}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                          {article.views && (
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{article.views}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Packing Tips Tab */}
        {activeTab === "packing" && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Master the Art of Smart Packing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From minimalist carry-on strategies to climate-specific gear
                guides, everything you need to pack like a pro
              </p>
            </div>

            {packingTips.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
                      <Backpack className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {guide.title}
                      </h3>
                      {guide.description && (
                        <p className="text-lg text-gray-600 mt-2">
                          {guide.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Essential Items */}
                  {guide.items && (
                    <div className="mb-10">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Bookmark className="h-6 w-6 mr-2 text-blue-600" />
                        Essential Items Checklist
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {guide.items.map((item, index) => (
                          <div
                            key={index}
                            className={`p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${
                              item.essential
                                ? "border-red-200 bg-red-50 hover:border-red-300"
                                : "border-gray-200 bg-gray-50 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-5 h-5 rounded-full flex-shrink-0 ${
                                    item.essential
                                      ? "bg-red-500"
                                      : "bg-gray-400"
                                  }`}
                                ></div>
                                <span className="font-bold text-gray-900">
                                  {item.name}
                                </span>
                              </div>
                              <span className="text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded-full">
                                {item.weight}
                              </span>
                            </div>
                            {item.notes && (
                              <p className="text-sm text-gray-600 ml-8">
                                {item.notes}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Climate Guides */}
                  {guide.climates && (
                    <div className="mb-10">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Globe className="h-6 w-6 mr-2 text-green-600" />
                        Climate-Specific Recommendations
                      </h4>
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        {guide.climates.map((climate, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200"
                          >
                            <div className="mb-6">
                              <h5 className="text-2xl font-bold text-gray-900 mb-2">
                                {climate.type}
                              </h5>
                              {climate.temperature && climate.humidity && (
                                <div className="text-sm text-gray-600 space-y-1">
                                  <p>
                                    <strong>Temperature:</strong>{" "}
                                    {climate.temperature}
                                  </p>
                                  <p>
                                    <strong>Humidity:</strong>{" "}
                                    {climate.humidity}
                                  </p>
                                </div>
                              )}
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                <h6 className="font-bold text-green-800 mb-3 flex items-center">
                                  ✅ Essential Items
                                </h6>
                                <ul className="space-y-2">
                                  {climate.essentials.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-gray-700 flex items-start"
                                    >
                                      <span className="text-green-600 mr-2">
                                        •
                                      </span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                <h6 className="font-bold text-red-800 mb-3 flex items-center">
                                  ❌ Items to Avoid
                                </h6>
                                <ul className="space-y-2">
                                  {climate.avoid.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-gray-700 flex items-start"
                                    >
                                      <span className="text-red-600 mr-2">
                                        •
                                      </span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pro Tips */}
                  {guide.tips && (
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Star className="h-6 w-6 mr-2 text-yellow-500" />
                        Pro Packing Tips
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guide.tips.map((tip, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 hover:shadow-lg transition-all"
                          >
                            <div className="bg-yellow-500 text-white rounded-full p-2 flex-shrink-0">
                              <ChevronRight className="h-4 w-4" />
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Cultural Guides Tab */}
        {activeTab === "culture" && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Navigate Cultures with Confidence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Deep cultural insights, etiquette guides, and essential phrases
                to help you connect respectfully with local communities
              </p>
            </div>

            {culturalGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Enhanced Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-10 text-white">
                  <div className="flex items-center space-x-6 mb-6">
                    <span className="text-6xl animate-pulse">{guide.flag}</span>
                    <div>
                      <h3 className="text-4xl font-bold mb-2">
                        {guide.country}
                      </h3>
                      <p className="text-2xl text-blue-100">{guide.title}</p>
                    </div>
                  </div>
                  {guide.overview && (
                    <p className="text-lg text-blue-100 leading-relaxed max-w-4xl">
                      {guide.overview}
                    </p>
                  )}
                </div>

                <div className="p-10">
                  {/* Cultural Sections */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-12">
                    {guide.sections.map((section, index) => (
                      <div key={index} className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-6">
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">
                            {section.title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            {section.content}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                            <h5 className="font-bold text-green-800 mb-4 flex items-center text-lg">
                              <span className="bg-green-200 rounded-full p-1 mr-2">
                                ✅
                              </span>
                              Do's
                            </h5>
                            <ul className="space-y-3">
                              {section.dos.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-green-700 flex items-start leading-relaxed"
                                >
                                  <span className="text-green-500 mr-3 font-bold">
                                    •
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                            <h5 className="font-bold text-red-800 mb-4 flex items-center text-lg">
                              <span className="bg-red-200 rounded-full p-1 mr-2">
                                ❌
                              </span>
                              Don'ts
                            </h5>
                            <ul className="space-y-3">
                              {section.donts.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-red-700 flex items-start leading-relaxed"
                                >
                                  <span className="text-red-500 mr-3 font-bold">
                                    •
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Essential Phrases */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="bg-orange-200 rounded-full p-2 mr-3">
                        🗣️
                      </span>
                      Essential Phrases
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {guide.keyPhrases.map((phrase, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-6 border-2 border-orange-200 hover:shadow-lg transition-all"
                        >
                          <div className="mb-3">
                            <div className="font-bold text-gray-900 text-lg mb-1">
                              {phrase.phrase}
                            </div>
                            <div className="text-gray-600 mb-1">
                              {phrase.meaning}
                            </div>
                            <div className="text-sm text-orange-600 italic font-medium">
                              {phrase.pronunciation}
                            </div>
                          </div>
                          {phrase.usage && (
                            <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                              {phrase.usage}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogTravelTips;
