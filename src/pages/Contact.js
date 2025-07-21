import { FileText, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contact</h1>
              <p className="text-gray-600">
                Have questions or need help planning your trip? We're here to
                assist you—reach out anytime!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-fadeIn max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Data Protection Officer
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-blue-600">BreakBuddy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-green-600">+0123456789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">
                      TravelEvents Pro - Privacy Office
                      <br />
                      {/* 123 Adventure Lane, Suite 456<br />
                              Explorer City, EC 12345<br />
                              United States */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Regional Contacts
              </h3>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">🇪🇺</span>
                    <h4 className="font-semibold text-gray-800">
                      European Union
                    </h4>
                  </div>
                  <p className="text-blue-600 text-sm">
                    eu-privacy@travelevents.com
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">🇬🇧</span>
                    <h4 className="font-semibold text-gray-800">
                      United Kingdom
                    </h4>
                  </div>
                  <p className="text-green-600 text-sm">
                    uk-privacy@travelevents.com
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">🌏</span>
                    <h4 className="font-semibold text-gray-800">
                      Asia Pacific
                    </h4>
                  </div>
                  <p className="text-purple-600 text-sm">
                    apac-privacy@travelevents.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Response Times
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold text-gray-800">Urgent Matters</h4>
                <p className="text-sm text-gray-600">24-48 hours</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📋</div>
                <h4 className="font-semibold text-gray-800">
                  General Inquiries
                </h4>
                <p className="text-sm text-gray-600">5 business days</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔍</div>
                <h4 className="font-semibold text-gray-800">Rights Requests</h4>
                <p className="text-sm text-gray-600">30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
