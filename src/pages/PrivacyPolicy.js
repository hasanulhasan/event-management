import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Globe, Calendar, Users, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'info-collection',
      title: 'Information We Collect',
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Personal Information</h4>
            <ul className="text-blue-800 space-y-1">
              <li>• Name, email address, and phone number</li>
              <li>• Travel preferences and destination interests</li>
              <li>• Event registration and booking details</li>
              <li>• Payment information (securely processed)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Automatic Information</h4>
            <ul className="text-green-800 space-y-1">
              <li>• Device and browser information</li>
              <li>• IP address and location data</li>
              <li>• Website usage patterns</li>
              <li>• Cookies and tracking technologies</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Service Delivery</h4>
              <p className="text-purple-800">Process bookings, manage events, and provide customer support for your travel and event experiences.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Communication</h4>
              <p className="text-orange-800">Send booking confirmations, event updates, and personalized travel recommendations.</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-900 mb-2">Improvement</h4>
              <p className="text-teal-800">Enhance our services, analyze usage patterns, and develop new features.</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-900 mb-2">Marketing</h4>
              <p className="text-pink-800">Share relevant travel deals and event opportunities (with your consent).</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Security',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-red-900 mb-2">We Never Sell Your Data</h4>
            <p className="text-red-800">Your personal information is never sold to third parties. We only share data with trusted partners necessary for service delivery.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Trusted Partners Include:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>• Payment processors (for secure transactions)</li>
              <li>• Travel service providers (hotels, airlines)</li>
              <li>• Event venues and organizers</li>
              <li>• Analytics services (anonymized data only)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Security Measures</h4>
            <p className="text-green-800">We use industry-standard encryption, secure servers, and regular security audits to protect your data.</p>
          </div>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Rights & Choices',
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Access & Update</h4>
              <p className="text-blue-800">View and modify your personal information through your account settings.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Data Portability</h4>
              <p className="text-purple-800">Request a copy of your data in a portable format.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Deletion</h4>
              <p className="text-orange-800">Request deletion of your account and personal data.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Opt-Out</h4>
              <p className="text-green-800">Unsubscribe from marketing communications at any time.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">We value your privacy. Your personal information is collected only to improve your travel experience and is never shared without your consent.</p>
            </div>
          </div>
        </div>
      </div>
      
     <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            At our travel and events platform, we're committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information. This policy explains our practices in clear, simple language.
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">{section.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedSection === section.id && (
                <div className="px-6 pb-6 border-t bg-gray-50">
                  <div className="pt-6">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PrivacyPolicy;