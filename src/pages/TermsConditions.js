import React, { useState } from 'react';
import { Calendar, CreditCard, AlertCircle, CheckCircle, Clock, FileText, Plane, Hotel } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsConditions() {
  const [activePolicy, setActivePolicy] = useState('booking');

  const policies = [
    { id: 'booking', title: 'Booking Policy', icon: Calendar },
    { id: 'cancellation', title: 'Cancellation Policy', icon: AlertCircle },
    { id: 'payment', title: 'Payment Terms', icon: CreditCard },
    { id: 'travel', title: 'Travel Terms', icon: Plane }
  ];

  const cancellationFees = [
    { timeframe: 'More than 30 days', fee: 'Free cancellation', color: 'green' },
    { timeframe: '15-30 days before', fee: '25% of total cost', color: 'yellow' },
    { timeframe: '7-14 days before', fee: '50% of total cost', color: 'orange' },
    { timeframe: '3-6 days before', fee: '75% of total cost', color: 'red' },
    { timeframe: 'Less than 3 days', fee: '100% of total cost', color: 'red' }
  ];

  const bookingSteps = [
    { step: 1, title: 'Select Trip', description: 'Choose your destination and dates' },
    { step: 2, title: 'Review Details', description: 'Confirm itinerary and pricing' },
    { step: 3, title: 'Make Payment', description: 'Secure payment processing' },
    { step: 4, title: 'Confirmation', description: 'Receive booking confirmation' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Terms & Conditions</h1>
              <p className="text-gray-600">Booking and cancellation policies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActivePolicy(policy.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                  activePolicy === policy.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <policy.icon className="w-4 h-4" />
                <span className="font-medium">{policy.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Booking Policy */}
        {activePolicy === 'booking' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Policy</h2>
              <p className="text-gray-600 mb-6">
                All bookings are subject to availability and confirmation. Please read our booking terms carefully.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Book</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {bookingSteps.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {item.step}
                          </div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Requirements</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Valid passport (minimum 6 months validity)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Travel insurance (recommended)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Full payment or deposit required</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Accurate passenger information</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Confirmation</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 mb-3">
                      Your booking is confirmed only after:
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Payment is successfully processed</li>
                      <li>• Availability is confirmed with suppliers</li>
                      <li>• You receive a confirmation email</li>
                      <li>• All required documents are submitted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cancellation Policy */}
        {activePolicy === 'cancellation' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
              <p className="text-gray-600 mb-6">
                Cancellation fees apply based on how far in advance you cancel your booking.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancellation Fees</h3>
                  <div className="space-y-3">
                    {cancellationFees.map((fee, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-gray-500" />
                          <span className="font-medium text-gray-900">{fee.timeframe}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          fee.color === 'green' ? 'bg-green-100 text-green-800' :
                          fee.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                          fee.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {fee.fee}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Cancel</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <ol className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                        <span className="text-gray-700">Contact our customer service team</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                        <span className="text-gray-700">Provide your booking reference number</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                        <span className="text-gray-700">Cancellation fee will be calculated</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                        <span className="text-gray-700">Refund processed within 7-14 business days</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Special Circumstances</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-2">Free Cancellation</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Medical emergencies (with documentation)</li>
                        <li>• Natural disasters at destination</li>
                        <li>• Government travel restrictions</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-medium text-red-800 mb-2">Non-Refundable</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• No-shows without notice</li>
                        <li>• Visa denials (customer responsibility)</li>
                        <li>• Personal change of mind</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Terms */}
        {activePolicy === 'payment' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-600 mb-6">
                Secure payment options and terms for your travel bookings.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Options</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium text-gray-900">Credit/Debit Cards</h4>
                      <p className="text-sm text-gray-600">Visa, Mastercard, Amex</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center text-white font-bold">P</div>
                      <h4 className="font-medium text-gray-900">PayPal</h4>
                      <p className="text-sm text-gray-600">Secure online payment</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-green-600 rounded mx-auto mb-2 flex items-center justify-center text-white font-bold">$</div>
                      <h4 className="font-medium text-gray-900">Bank Transfer</h4>
                      <p className="text-sm text-gray-600">For large bookings</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Schedule</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Booking deposit</span>
                        <span className="font-medium text-gray-900">25% of total cost</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Final payment due</span>
                        <span className="font-medium text-gray-900">45 days before departure</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Late payment fee</span>
                        <span className="font-medium text-gray-900">$50 per week</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Refunds processed to original payment method</li>
                      <li>• Processing time: 7-14 business days</li>
                      <li>• Bank fees may apply for international transfers</li>
                      <li>• Refunds subject to cancellation policy terms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Travel Terms */}
        {activePolicy === 'travel' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel Terms</h2>
              <p className="text-gray-600 mb-6">
                Important terms and conditions for your travel experience.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Travel Documentation</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-1">Your Responsibility</h4>
                        <p className="text-yellow-700 text-sm">
                          Ensure you have valid passport, visas, and required vaccinations. 
                          We are not responsible for denied entry due to invalid documents.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Travel Insurance</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-2">Recommended Coverage</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Trip cancellation/interruption</li>
                        <li>• Medical emergencies</li>
                        <li>• Lost or delayed baggage</li>
                        <li>• Flight delays/cancellations</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-800 mb-2">Purchase Options</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Through our partner providers</li>
                        <li>• Your own insurance company</li>
                        <li>• Credit card coverage</li>
                        <li>• Employer travel policies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Liability & Responsibility</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• We act as intermediary between you and travel suppliers</li>
                      <li>• Suppliers are responsible for their services</li>
                      <li>• We are not liable for acts of third parties</li>
                      <li>• Travel at your own risk and responsibility</li>
                      <li>• Force majeure events are beyond our control</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes & Modifications</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-700 mb-3">
                      Changes to confirmed bookings may be possible subject to:
                    </p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Availability with suppliers</li>
                      <li>• Change fees as per supplier policies</li>
                      <li>• Price differences for new arrangements</li>
                      <li>• Minimum notice requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
}