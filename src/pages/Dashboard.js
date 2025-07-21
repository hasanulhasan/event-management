import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Users, MapPin, DollarSign, TrendingUp, Filter, Plus, Edit, Eye, MoreHorizontal } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const revenueData = [
    { month: 'Jan', revenue: 45000, bookings: 120 },
    { month: 'Feb', revenue: 52000, bookings: 140 },
    { month: 'Mar', revenue: 48000, bookings: 135 },
    { month: 'Apr', revenue: 61000, bookings: 165 },
    { month: 'May', revenue: 55000, bookings: 150 },
    { month: 'Jun', revenue: 67000, bookings: 180 },
  ];

  const tourTypeData = [
    { name: 'Adventure Tours', value: 35, color: '#3B82F6' },
    { name: 'Cultural Events', value: 28, color: '#10B981' },
    { name: 'Food & Wine', value: 22, color: '#F59E0B' },
    { name: 'City Tours', value: 15, color: '#EF4444' },
  ];

  const recentBookings = [
    { id: 1, customer: 'Sarah Johnson', tour: 'Himalayan Adventure', date: '2025-07-20', status: 'confirmed', amount: '$2,499' },
    { id: 2, customer: 'Michael Chen', tour: 'Tokyo Food Tour', date: '2025-07-22', status: 'pending', amount: '$899' },
    { id: 3, customer: 'Emma Wilson', tour: 'Bali Cultural Experience', date: '2025-07-25', status: 'confirmed', amount: '$1,299' },
    { id: 4, customer: 'David Rodriguez', tour: 'European Wine Trail', date: '2025-07-28', status: 'confirmed', amount: '$3,199' },
  ];

  const upcomingEvents = [
    { id: 1, name: 'Summer Music Festival', date: '2025-08-15', location: 'Central Park', capacity: 5000, booked: 4200 },
    { id: 2, name: 'Food & Wine Expo', date: '2025-08-20', location: 'Convention Center', capacity: 2000, booked: 1800 },
    { id: 3, name: 'Cultural Heritage Tour', date: '2025-08-25', location: 'Historic District', capacity: 50, booked: 45 },
  ];

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        active ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
            <TabButton id="bookings" label="Bookings" active={activeTab === 'bookings'} onClick={setActiveTab} />
            <TabButton id="tours" label="Tours & Events" active={activeTab === 'tours'} onClick={setActiveTab} />
            <TabButton id="analytics" label="Analytics" active={activeTab === 'analytics'} onClick={setActiveTab} />
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Revenue"
                value="$328,400"
                change={12.5}
                icon={DollarSign}
                color="bg-blue-600"
              />
              <StatCard
                title="Active Bookings"
                value="1,247"
                change={8.2}
                icon={Calendar}
                color="bg-green-600"
              />
              <StatCard
                title="Total Customers"
                value="8,492"
                change={15.3}
                icon={Users}
                color="bg-purple-600"
              />
              <StatCard
                title="Active Tours"
                value="156"
                change={-2.1}
                icon={MapPin}
                color="bg-orange-600"
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                    <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Tour Categories</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={tourTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {tourTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {tourTypeData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold">Recent Bookings</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{booking.customer}</p>
                          <p className="text-sm text-gray-600">{booking.tour}</p>
                          <p className="text-xs text-gray-500">{booking.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{booking.amount}</p>
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs ${
                            booking.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold">Upcoming Events</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{event.name}</p>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </p>
                          <p className="text-xs text-gray-500">{event.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {event.booked}/{event.capacity}
                          </p>
                          <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(event.booked / event.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">All Bookings</h3>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour/Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.tour}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.amount}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tours Tab */}
        {activeTab === 'tours' && (
          <div className="space-y-6">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Tours & Events Management</h3>
                  <p className="text-blue-100">Manage your tours, events, and experiences</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-2 font-medium">
                    <Plus className="w-4 h-4" />
                    <span>Add New Tour</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-sm text-gray-600">Active Tours</div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <div className="text-2xl font-bold text-gray-900">23</div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                <div className="text-2xl font-bold text-gray-900">89%</div>
                <div className="text-sm text-gray-600">Avg. Capacity</div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Avg. Rating</div>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {event.id === 1 ? 'Music Festival' : event.id === 2 ? 'Food & Wine' : 'Cultural Tour'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                        {event.name}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>

                    {/* Capacity Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Bookings</span>
                        <span className="text-sm text-gray-600">{event.booked}/{event.capacity}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            (event.booked / event.capacity) > 0.8 
                              ? 'bg-red-500' 
                              : (event.booked / event.capacity) > 0.6 
                                ? 'bg-orange-500' 
                                : 'bg-green-500'
                          }`}
                          style={{ width: `${(event.booked / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          {Math.round((event.booked / event.capacity) * 100)}% filled
                        </span>
                        <span className="text-xs text-gray-500">
                          {event.capacity - event.booked} spots left
                        </span>
                      </div>
                    </div>

                    {/* Price and Status */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          ${event.id === 1 ? '299' : event.id === 2 ? '149' : '199'}
                        </span>
                        <span className="text-sm text-gray-600">/person</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600 font-medium">Active</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add New Tour Card */}
              <div className="group bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Plus className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Add New Tour</h4>
                  <p className="text-sm text-gray-600 mb-4">Create a new tour or event experience</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Schedule Event</div>
                    <div className="text-sm text-gray-600">Plan upcoming events</div>
                  </div>
                </button>
                <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Manage Capacity</div>
                    <div className="text-sm text-gray-600">Update tour limits</div>
                  </div>
                </button>
                <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">View Analytics</div>
                    <div className="text-sm text-gray-600">Tour performance data</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Revenue & Bookings Analytics</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="revenue" fill="#3B82F6" name="Revenue ($)" />
                  <Bar yAxisId="right" dataKey="bookings" fill="#10B981" name="Bookings" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Conversion Rate</span>
                    <span className="font-semibold text-green-600">12.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Booking Value</span>
                    <span className="font-semibold">$1,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-green-600">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Repeat Customers</span>
                    <span className="font-semibold">38%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Top Destinations</h3>
                <div className="space-y-3">
                  {['Bali, Indonesia', 'Tokyo, Japan', 'Paris, France', 'New York, USA', 'Rome, Italy'].map((dest, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{dest}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${90 - index * 15}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{90 - index * 15}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;