/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Hotel,
  Star,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  X,
  Navigation,
} from "lucide-react";

const DestinationExplorer = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [dateRange, setDateRange] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(null);
  const [tempEndDate, setTempEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);

  const destinations = [
    {
      id: 1,
      city: "New York City",
      country: "USA",
      coordinates: { lat: 40.7128, lng: -74.006 },
      mainImage:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1519121785383-3229633bb75b?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "Broadway Week",
          type: "Theater",
          date: "2025-01-15",
          price: "$75-150",
          location: "Times Square",
          coordinates: { lat: 40.758, lng: -73.9855 },
        },
        {
          name: "Winter Jazz Festival",
          type: "Music",
          date: "2025-02-10",
          price: "$45-85",
          location: "Lincoln Center",
          coordinates: { lat: 40.7727, lng: -73.9857 },
        },
        {
          name: "Fashion Week",
          type: "Fashion",
          date: "2025-02-20",
          price: "$200-500",
          location: "Javits Center",
          coordinates: { lat: 40.7555, lng: -74.0027 },
        },
      ],
      hotels: [
        {
          name: "The Plaza Hotel",
          rating: 5,
          price: "$450",
          distance: "0.2 miles from Times Square",
        },
        {
          name: "Pod Hotels",
          rating: 4,
          price: "$180",
          distance: "0.5 miles from Central Park",
        },
        {
          name: "The High Line Hotel",
          rating: 4,
          price: "$280",
          distance: "0.3 miles from Chelsea Market",
        },
      ],
      travelInfo: {
        airport: "JFK/LGA/EWR",
        transit: "Extensive subway system",
        weather: "Cold winters, hot summers",
        currency: "USD",
      },
    },
    {
      id: 2,
      city: "Tokyo",
      country: "Japan",
      coordinates: { lat: 35.6762, lng: 139.6503 },
      mainImage:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1554797589-7241bb691973?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "Cherry Blossom Festival",
          type: "Cultural",
          date: "2025-04-01",
          price: "Free",
          location: "Ueno Park",
          coordinates: { lat: 35.7168, lng: 139.7715 },
        },
        {
          name: "Tokyo Game Show",
          type: "Gaming",
          date: "2025-09-15",
          price: "$25-60",
          location: "Makuhari Messe",
          coordinates: { lat: 35.6466, lng: 140.0329 },
        },
        {
          name: "Sumida River Fireworks",
          type: "Festival",
          date: "2025-07-25",
          price: "Free",
          location: "Sumida River",
          coordinates: { lat: 35.7061, lng: 139.8107 },
        },
      ],
      hotels: [
        {
          name: "Park Hyatt Tokyo",
          rating: 5,
          price: "$520",
          distance: "0.1 miles from Shinjuku",
        },
        {
          name: "Capsule Hotel Shinjuku",
          rating: 3,
          price: "$45",
          distance: "0.2 miles from JR Station",
        },
        {
          name: "Hotel Gracery Shinjuku",
          rating: 4,
          price: "$220",
          distance: "0.1 miles from Godzilla Head",
        },
      ],
      travelInfo: {
        airport: "NRT/HND",
        transit: "JR Pass recommended",
        weather: "Four distinct seasons",
        currency: "JPY",
      },
    },
    {
      id: 3,
      city: "London",
      country: "UK",
      coordinates: { lat: 51.5074, lng: -0.1278 },
      mainImage:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1529180184525-78f99adb8e98?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "West End Shows",
          type: "Theater",
          date: "Year-round",
          price: "$35-120",
          location: "West End",
          coordinates: { lat: 51.5145, lng: -0.127 },
        },
        {
          name: "Notting Hill Carnival",
          type: "Cultural",
          date: "2025-08-24",
          price: "Free",
          location: "Notting Hill",
          coordinates: { lat: 51.5158, lng: -0.2055 },
        },
        {
          name: "London Fashion Week",
          type: "Fashion",
          date: "2025-02-14",
          price: "$100-300",
          location: "Somerset House",
          coordinates: { lat: 51.5112, lng: -0.117 },
        },
      ],
      hotels: [
        {
          name: "The Savoy",
          rating: 5,
          price: "$480",
          distance: "0.3 miles from Covent Garden",
        },
        {
          name: "Premier Inn",
          rating: 4,
          price: "$95",
          distance: "0.5 miles from London Bridge",
        },
        {
          name: "The Shard Hotel",
          rating: 5,
          price: "$380",
          distance: "0.1 miles from Borough Market",
        },
      ],
      travelInfo: {
        airport: "LHR/LGW/STN",
        transit: "Oyster Card for Tube/Bus",
        weather: "Mild, often rainy",
        currency: "GBP",
      },
    },
    {
      id: 4,
      city: "Barcelona",
      country: "Spain",
      coordinates: { lat: 41.3851, lng: 2.1734 },
      mainImage:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "Primavera Sound",
          type: "Music",
          date: "2025-06-05",
          price: "$180-320",
          location: "Parc del Fòrum",
          coordinates: { lat: 41.4095, lng: 2.217 },
        },
        {
          name: "La Mercè Festival",
          type: "Cultural",
          date: "2025-09-20",
          price: "Free",
          location: "Gothic Quarter",
          coordinates: { lat: 41.3828, lng: 2.1761 },
        },
        {
          name: "Mobile World Congress",
          type: "Tech",
          date: "2025-02-24",
          price: "$800-1200",
          location: "Fira Barcelona",
          coordinates: { lat: 41.3537, lng: 2.1267 },
        },
      ],
      hotels: [
        {
          name: "Hotel Casa Fuster",
          rating: 5,
          price: "$280",
          distance: "0.2 miles from Gràcia",
        },
        {
          name: "Generator Barcelona",
          rating: 4,
          price: "$75",
          distance: "0.3 miles from Sagrada Familia",
        },
        {
          name: "W Barcelona",
          rating: 5,
          price: "$420",
          distance: "0.1 miles from Beach",
        },
      ],
      travelInfo: {
        airport: "BCN",
        transit: "Metro and excellent walkability",
        weather: "Mediterranean climate",
        currency: "EUR",
      },
    },
    {
      id: 5,
      city: "Paris",
      country: "France",
      coordinates: { lat: 48.8566, lng: 2.3522 },
      mainImage:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "Paris Fashion Week",
          type: "Fashion",
          date: "2025-03-01",
          price: "$150-400",
          location: "Grand Palais",
          coordinates: { lat: 48.8662, lng: 2.3124 },
        },
        {
          name: "Fête de la Musique",
          type: "Music",
          date: "2025-06-21",
          price: "Free",
          location: "Throughout Paris",
          coordinates: { lat: 48.8566, lng: 2.3522 },
        },
        {
          name: "Nuit Blanche",
          type: "Art",
          date: "2025-10-04",
          price: "Free",
          location: "Various Museums",
          coordinates: { lat: 48.8607, lng: 2.3365 },
        },
      ],
      hotels: [
        {
          name: "The Ritz Paris",
          rating: 5,
          price: "$650",
          distance: "0.1 miles from Place Vendôme",
        },
        {
          name: "Hotel des Grands Boulevards",
          rating: 4,
          price: "$180",
          distance: "0.2 miles from Opera",
        },
        {
          name: "MIJE Hostels",
          rating: 3,
          price: "$35",
          distance: "0.3 miles from Marais",
        },
      ],
      travelInfo: {
        airport: "CDG/ORY",
        transit: "Metro and RER system",
        weather: "Temperate oceanic climate",
        currency: "EUR",
      },
    },
    {
      id: 6,
      city: "Dubai",
      country: "UAE",
      coordinates: { lat: 25.2048, lng: 55.2708 },
      mainImage:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1546412414-e1885259563a?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "Dubai Shopping Festival",
          type: "Shopping",
          date: "2025-01-10",
          price: "Free entry",
          location: "Dubai Mall",
          coordinates: { lat: 25.1972, lng: 55.2796 },
        },
        {
          name: "Art Dubai",
          type: "Art",
          date: "2025-03-15",
          price: "$25-50",
          location: "Madinat Jumeirah",
          coordinates: { lat: 25.1321, lng: 55.1851 },
        },
        {
          name: "Dubai Food Festival",
          type: "Food",
          date: "2025-02-28",
          price: "Varies",
          location: "Various Venues",
          coordinates: { lat: 25.2048, lng: 55.2708 },
        },
      ],
      hotels: [
        {
          name: "Burj Al Arab",
          rating: 5,
          price: "$1200",
          distance: "0.1 miles from Jumeirah Beach",
        },
        {
          name: "Atlantis The Palm",
          rating: 5,
          price: "$380",
          distance: "0.2 miles from Palm Jumeirah",
        },
        {
          name: "Rove Downtown",
          rating: 4,
          price: "$120",
          distance: "0.3 miles from Dubai Mall",
        },
      ],
      travelInfo: {
        airport: "DXB",
        transit: "Metro and taxi",
        weather: "Desert climate, hot summers",
        currency: "AED",
      },
    },
    {
      id: 7,
      city: "Singapore",
      country: "Singapore",
      coordinates: { lat: 1.3521, lng: 103.8198 },
      mainImage:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1555217851-6141535bd771?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "Singapore Grand Prix",
          type: "Sports",
          date: "2025-09-14",
          price: "$80-500",
          location: "Marina Bay Circuit",
          coordinates: { lat: 1.2921, lng: 103.8587 },
        },
        {
          name: "Singapore Food Festival",
          type: "Food",
          date: "2025-07-15",
          price: "$10-30",
          location: "Clarke Quay",
          coordinates: { lat: 1.2884, lng: 103.8468 },
        },
        {
          name: "Chinese New Year",
          type: "Cultural",
          date: "2025-01-29",
          price: "Free",
          location: "Chinatown",
          coordinates: { lat: 1.2827, lng: 103.8442 },
        },
      ],
      hotels: [
        {
          name: "Marina Bay Sands",
          rating: 5,
          price: "$320",
          distance: "0.1 miles from Gardens by the Bay",
        },
        {
          name: "Raffles Singapore",
          rating: 5,
          price: "$450",
          distance: "0.2 miles from City Hall",
        },
        {
          name: "Pod Boutique Capsule Hotel",
          rating: 4,
          price: "$65",
          distance: "0.3 miles from Chinatown",
        },
      ],
      travelInfo: {
        airport: "SIN",
        transit: "Excellent MRT system",
        weather: "Tropical climate",
        currency: "SGD",
      },
    },
    {
      id: 8,
      city: "Sydney",
      country: "Australia",
      coordinates: { lat: -33.8688, lng: 151.2093 },
      mainImage:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=1080&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1549180030-48bf079fb38a?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=1920&h=1080&fit=crop",
        "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=1920&h=1080&fit=crop",
      ],
      events: [
        {
          name: "Sydney Festival",
          type: "Arts",
          date: "2025-01-08",
          price: "$25-150",
          location: "Sydney Opera House",
          coordinates: { lat: -33.8568, lng: 151.2153 },
        },
        {
          name: "Vivid Sydney",
          type: "Light",
          date: "2025-05-24",
          price: "Free",
          location: "Circular Quay",
          coordinates: { lat: -33.8614, lng: 151.2108 },
        },
        {
          name: "Sydney Film Festival",
          type: "Film",
          date: "2025-06-05",
          price: "$18-35",
          location: "State Theatre",
          coordinates: { lat: -33.8737, lng: 151.2073 },
        },
      ],
      hotels: [
        {
          name: "Park Hyatt Sydney",
          rating: 5,
          price: "$480",
          distance: "0.1 miles from Circular Quay",
        },
        {
          name: "The Langham Sydney",
          rating: 5,
          price: "$320",
          distance: "0.2 miles from The Rocks",
        },
        {
          name: "YHA Sydney Harbour",
          rating: 3,
          price: "$45",
          distance: "0.3 miles from Opera House",
        },
      ],
      travelInfo: {
        airport: "SYD",
        transit: "Trains, buses, and ferries",
        weather: "Temperate oceanic climate",
        currency: "AUD",
      },
    },
  ];

  // Load Google Maps API
  useEffect(() => {
    if (
      !window.google &&
      !document.querySelector('script[src*="maps.googleapis.com"]')
    ) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setMapLoaded(true);
      document.head.appendChild(script);
    } else if (window.google) {
      setMapLoaded(true);
    }
  }, []);

  // Initialize map when destination changes and Google Maps is loaded
  useEffect(() => {
    if (mapLoaded && selectedDestination && activeTab === "travel") {
      initializeMap();
    }
  }, [mapLoaded, selectedDestination, activeTab]);

  const initializeMap = () => {
    const mapElement = document.getElementById("destination-map");
    if (!mapElement || !window.google) return;

    const mapOptions = {
      center: selectedDestination.coordinates,
      zoom: 12,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };

    const newMap = new window.google.maps.Map(mapElement, mapOptions);
    setMap(newMap);

    // Add city marker
    const cityMarker = new window.google.maps.Marker({
      position: selectedDestination.coordinates,
      map: newMap,
      title: `${selectedDestination.city}, ${selectedDestination.country}`,
      icon: {
        url:
          "data:image/svg+xml;base64," +
          btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(59, 130, 246)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(32, 32),
      },
    });

    const cityInfoWindow = new window.google.maps.InfoWindow({
      content: `
        <div class="p-2">
          <h3 class="font-semibold text-gray-900">${selectedDestination.city}</h3>
          <p class="text-sm text-gray-600">${selectedDestination.country}</p>
          <p class="text-xs text-gray-500 mt-1">City Center</p>
        </div>
      `,
    });

    cityMarker.addListener("click", () => {
      cityInfoWindow.open(newMap, cityMarker);
    });

    // Add event markers
    selectedDestination.events.forEach((event, index) => {
      const eventMarker = new window.google.maps.Marker({
        position: event.coordinates,
        map: newMap,
        title: event.name,
        icon: {
          url:
            "data:image/svg+xml;base64," +
            btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="rgb(239, 68, 68)" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(28, 28),
        },
      });

      const eventInfoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-3 max-w-xs">
            <h4 class="font-semibold text-gray-900 mb-2">${event.name}</h4>
            <div class="space-y-1 text-sm">
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                ${event.location}
              </div>
              <div class="flex items-center text-gray-600">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
                ${event.price}
              </div>
              <span class="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 mt-2">${event.type}</span>
            </div>
          </div>
        `,
      });

      eventMarker.addListener("click", () => {
        eventInfoWindow.open(newMap, eventMarker);
      });
    });

    // Adjust map bounds to include all markers
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(selectedDestination.coordinates);
    selectedDestination.events.forEach((event) => {
      bounds.extend(event.coordinates);
    });
    newMap.fitBounds(bounds);

    // Set minimum zoom level
    const listener = window.google.maps.event.addListener(
      newMap,
      "idle",
      function () {
        if (newMap.getZoom() > 15) newMap.setZoom(15);
        window.google.maps.event.removeListener(listener);
      }
    );
  };

  const formatDateRange = (start, end) => {
    if (!start || !end) return "";
    const formatDate = (date) => {
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    };
    return `${formatDate(start)} – ${formatDate(end)}`;
  };

  const handleDateSelect = (date) => {
    if (!tempStartDate || (tempStartDate && tempEndDate)) {
      setTempStartDate(date);
      setTempEndDate(null);
    } else {
      if (date < tempStartDate) {
        setTempEndDate(tempStartDate);
        setTempStartDate(date);
      } else {
        setTempEndDate(date);
      }
    }
  };

  const applyDateRange = () => {
    if (tempStartDate && tempEndDate) {
      setDateRange(formatDateRange(tempStartDate, tempEndDate));
      setShowDatePicker(false);
    }
  };

  const clearDateRange = () => {
    setTempStartDate(null);
    setTempEndDate(null);
    setDateRange("");
  };

  const isDateInRange = (date) => {
    if (!tempStartDate || !tempEndDate) return false;
    return date >= tempStartDate && date <= tempEndDate;
  };

  const isStartOrEndDate = (date) => {
    return (
      (tempStartDate && date.getTime() === tempStartDate.getTime()) ||
      (tempEndDate && date.getTime() === tempEndDate.getTime())
    );
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const DatePicker = () => {
    if (!showDatePicker) return null;

    const leftMonthDays = getDaysInMonth(currentMonth);
    const rightMonth = new Date(currentMonth);
    rightMonth.setMonth(currentMonth.getMonth() + 1);
    const rightMonthDays = getDaysInMonth(rightMonth);

    return (
      <>
        {/* Backdrop for mobile */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setShowDatePicker(false)}
        />

        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg shadow-xl z-50 p-3 sm:p-4 lg:left-auto lg:right-0px lg:w-[600px]">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left Calendar */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3 text-white">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-medium text-sm sm:text-base">
                  {monthNames[currentMonth.getMonth()]},{" "}
                  {currentMonth.getFullYear()}
                </span>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-1 hover:bg-gray-700 rounded lg:invisible"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-gray-400 text-xs sm:text-sm py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {leftMonthDays.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => date && handleDateSelect(date)}
                    disabled={!date}
                    className={`
                      w-8 h-8 sm:w-9 sm:h-9 rounded text-xs sm:text-sm
                      ${!date ? "invisible" : ""}
                      ${
                        date && isStartOrEndDate(date)
                          ? "bg-blue-500 text-white"
                          : ""
                      }
                      ${
                        date && isDateInRange(date) && !isStartOrEndDate(date)
                          ? "bg-blue-500/20 text-white"
                          : ""
                      }
                      ${
                        date && !isDateInRange(date) && !isStartOrEndDate(date)
                          ? "text-gray-300 hover:bg-gray-700"
                          : ""
                      }
                      ${
                        date &&
                        date.toDateString() === new Date().toDateString()
                          ? "ring-1 ring-blue-400"
                          : ""
                      }
                    `}
                  >
                    {date?.getDate()}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Calendar - Desktop only */}
            <div className="hidden lg:block flex-1">
              <div className="flex items-center justify-between mb-3 text-white">
                <div className="w-5" />
                <span className="font-medium">
                  {monthNames[rightMonth.getMonth()]},{" "}
                  {rightMonth.getFullYear()}
                </span>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-gray-400 text-sm py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {rightMonthDays.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => date && handleDateSelect(date)}
                    disabled={!date}
                    className={`
                      w-9 h-9 rounded text-sm
                      ${!date ? "invisible" : ""}
                      ${
                        date && isStartOrEndDate(date)
                          ? "bg-blue-500 text-white"
                          : ""
                      }
                      ${
                        date && isDateInRange(date) && !isStartOrEndDate(date)
                          ? "bg-blue-500/20 text-white"
                          : ""
                      }
                      ${
                        date && !isDateInRange(date) && !isStartOrEndDate(date)
                          ? "text-gray-300 hover:bg-gray-700"
                          : ""
                      }
                      ${
                        date &&
                        date.toDateString() === new Date().toDateString()
                          ? "ring-1 ring-blue-400"
                          : ""
                      }
                    `}
                  >
                    {date?.getDate()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick select buttons */}
          <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <button
                onClick={() => {
                  const today = new Date();
                  setTempStartDate(today);
                  setTempEndDate(today);
                }}
                className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm px-2 py-1"
              >
                Today
              </button>
              <button
                onClick={() => {
                  const today = new Date();
                  const nextWeek = new Date(today);
                  nextWeek.setDate(today.getDate() + 7);
                  setTempStartDate(today);
                  setTempEndDate(nextWeek);
                }}
                className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm px-2 py-1"
              >
                Next 7 Days
              </button>
            </div>
            <button
              onClick={applyDateRange}
              disabled={!tempStartDate || !tempEndDate}
              className="bg-blue-500 text-white px-6 py-1.5 rounded text-sm hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              OK
            </button>
          </div>
        </div>
      </>
    );
  };

  // Click outside to close date picker
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDatePicker && !event.target.closest(".date-picker-container")) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDatePicker]);

  const parseDateRange = (dateRangeStr) => {
    if (!dateRangeStr) return { startDate: null, endDate: null };
    const dates = dateRangeStr.split(" – ");
    if (dates.length !== 2) return { startDate: null, endDate: null };

    try {
      const startDate = new Date(dates[0]);
      const endDate = new Date(dates[1]);
      return { startDate, endDate };
    } catch {
      return { startDate: null, endDate: null };
    }
  };

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.events.some((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Date range filtering
    let matchesDateRange = true;
    const { startDate, endDate } = parseDateRange(dateRange);

    if (startDate && endDate) {
      matchesDateRange = dest.events.some((event) => {
        if (event.date === "Year-round") return true;
        const eventDate = new Date(event.date);
        return eventDate >= startDate && eventDate <= endDate;
      });
    }

    return matchesSearch && matchesDateRange;
  });

  const getEventTypeColor = (type) => {
    const colors = {
      Music: "bg-purple-100 text-purple-800",
      Theater: "bg-red-100 text-red-800",
      Cultural: "bg-blue-100 text-blue-800",
      Fashion: "bg-pink-100 text-pink-800",
      Gaming: "bg-green-100 text-green-800",
      Festival: "bg-orange-100 text-orange-800",
      Tech: "bg-gray-100 text-gray-800",
      Sports: "bg-indigo-100 text-indigo-800",
      Food: "bg-yellow-100 text-yellow-800",
      Shopping: "bg-teal-100 text-teal-800",
      Art: "bg-rose-100 text-rose-800",
      Film: "bg-cyan-100 text-cyan-800",
      Light: "bg-violet-100 text-violet-800",
      Arts: "bg-emerald-100 text-emerald-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const openImageModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setShowImageModal(true);
  };

  const nextImage = () => {
    setSelectedImageIndex(
      (prev) => (prev + 1) % selectedDestination.images.length
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? selectedDestination.images.length - 1 : prev - 1
    );
  };

  const ImageModal = () => {
    if (!showImageModal || !selectedDestination) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
        <button
          onClick={() => setShowImageModal(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="max-w-7xl max-h-[90vh] mx-4">
          <img
            src={selectedDestination.images[selectedImageIndex]}
            alt={`${selectedDestination.city} - View ${selectedImageIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
          />

          {/* Image indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {selectedDestination.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedImageIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    );
  };

  const DestinationCard = ({ destination }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {/* Single main image for listing */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={destination.mainImage}
            alt={`${destination.city}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {destination.city}
            </h3>
            <span className="text-sm text-gray-500">{destination.country}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{destination.events.length} upcoming events</span>
          </div>
          <button
            onClick={() => setSelectedDestination(destination)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Details
          </button>
        </div>
      </div>
    );
  };

  const EventsList = ({ events }) => (
    <div className="space-y-3">
      {events.map((event, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{event.name}</h4>
            <span
              className={`px-2 py-1 text-xs rounded-full ${getEventTypeColor(
                event.type
              )}`}
            >
              {event.type}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{event.price}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{event.location}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const HotelsList = ({ hotels }) => (
    <div className="space-y-3">
      {hotels.map((hotel, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{hotel.name}</h4>
            <div className="flex items-center">{renderStars(hotel.rating)}</div>
          </div>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{hotel.price}/night</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{hotel.distance}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const TravelInfo = ({ info }) => (
    <div className="space-y-6">
      {/* Travel Information */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Getting There</h4>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Airport:</strong> {info.airport}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Transit:</strong> {info.transit}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Know Before You Go
            </h4>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Weather:</strong> {info.weather}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Currency:</strong> {info.currency}
            </p>
          </div>
        </div>
      </div>

      {/* Events Summary */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Event Locations</h4>
        <div className="space-y-2">
          {selectedDestination.events.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="font-medium">{event.name}</span>
              </div>
              <span className="text-gray-600">{event.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Destination Explorer
          </h1>

          {/* Search and Date Range Container */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative lg:w-[70%]">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, cities, or events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 hover:border-gray-400 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Date Range Picker */}
            <div className="lg:w-[30%] date-picker-container">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="MM/dd/yyyy – MM/dd/yyyy"
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 hover:border-gray-400 transition-colors cursor-pointer"
                  value={dateRange}
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  readOnly
                />
                <DatePicker />
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm || dateRange) && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setDateRange("");
                  setTempStartDate(null);
                  setTempEndDate(null);
                }}
                className="text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {selectedDestination ? (
          <div>
            {/* Back Button */}
            <button
              onClick={() => setSelectedDestination(null)}
              className="mb-6 text-blue-600 hover:text-blue-800 flex items-center transition-colors"
            >
              ← Back to destinations
            </button>

            {/* Destination Header */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              {/* Image Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
                {/* Main large image */}
                <div className="md:col-span-2 md:row-span-2 relative h-64 md:h-96 overflow-hidden rounded-lg">
                  <img
                    src={selectedDestination.images[0]}
                    alt={`${selectedDestination.city} - Main view`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openImageModal(0)}
                  />
                </div>

                {/* Side images */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  <div className="relative h-32 md:h-[11.5rem] overflow-hidden rounded-lg">
                    <img
                      src={selectedDestination.images[1]}
                      alt={`${selectedDestination.city} - View 2`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => openImageModal(1)}
                    />
                  </div>
                  <div className="relative h-32 md:h-[11.5rem] overflow-hidden rounded-lg">
                    <img
                      src={selectedDestination.images[2]}
                      alt={`${selectedDestination.city} - View 3`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => openImageModal(2)}
                    />
                  </div>
                </div>

                {/* Additional images for mobile */}
                <div className="grid grid-cols-3 gap-2 md:hidden">
                  {selectedDestination.images
                    .slice(3, 6)
                    .map((image, index) => (
                      <div
                        key={index}
                        className="relative h-24 overflow-hidden rounded-lg"
                      >
                        <img
                          src={image}
                          alt={`${selectedDestination.city} - View ${
                            index + 4
                          }`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => openImageModal(index + 3)}
                        />
                        {index === 2 &&
                          selectedDestination.images.length > 6 && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                              <span className="text-white font-medium">
                                +{selectedDestination.images.length - 6}
                              </span>
                            </div>
                          )}
                      </div>
                    ))}
                </div>

                {/* Show all photos button */}
                <div className="md:col-span-3 flex justify-center">
                  <button
                    onClick={() => openImageModal(0)}
                    className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
                  >
                    <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                      <div className="bg-gray-900 rounded-sm"></div>
                    </div>
                    <span>
                      Show all {selectedDestination.images.length} photos
                    </span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedDestination.city}, {selectedDestination.country}
                </h2>
                <div className="text-sm text-gray-600">
                  {selectedDestination.images.length} photos •{" "}
                  {selectedDestination.events.length} events
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <nav className="flex space-x-8">
                {["events", "hotels"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab === "events" && (
                      <Calendar className="w-4 h-4 inline mr-2" />
                    )}
                    {tab === "hotels" && (
                      <Hotel className="w-4 h-4 inline mr-2" />
                    )}
                    {/* {tab === 'travel' && <MapPin className="w-4 h-4 inline mr-2" />} */}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row gap-6">
              <div className="lg:w-[40%]">
                {activeTab === "events" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Upcoming Events
                    </h3>
                    <EventsList events={selectedDestination.events} />
                  </div>
                )}
                {activeTab === "hotels" && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Recommended Hotels
                    </h3>
                    <HotelsList hotels={selectedDestination.hotels} />
                  </div>
                )}
                {/* {activeTab === 'travel' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Travel Information</h3>
                  <TravelInfo info={selectedDestination.travelInfo} />
                </div>
              )} */}
              </div>
              <div className="lg:w-[60%]">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-blue-600" />
                  Destination Map
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  • Red pins: Event locations
                </p>
                <div
                  id="destination-map"
                  className="w-full h-96 rounded-lg overflow-hidden"
                  style={{ minHeight: "384px" }}
                >
                  <iframe
                    title="Destination Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11143.809717751654!2d151.20371343510456!3d-33.86197210197784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1saustralia%20%20all%20tourist%20places%20pin%20poitns!5e0!3m2!1sen!2sbd!4v1753162438982!5m2!1sen!2sbd"
                    width="600"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredDestinations.length} of {destinations.length}{" "}
                destinations
                {(searchTerm || dateRange) && (
                  <span className="ml-2 text-sm">
                    {searchTerm && `matching "${searchTerm}"`}
                    {dateRange && (
                      <span className="ml-1">
                        {searchTerm && "and "}
                        within date range
                      </span>
                    )}
                  </span>
                )}
              </p>
            </div>

            {/* Destination Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>

            {/* No Results Message */}
            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No destinations found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or date range to find more
                  destinations.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setDateRange("");
                    setTempStartDate(null);
                    setTempEndDate(null);
                  }}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal />
    </div>
  );
};

export default DestinationExplorer;
