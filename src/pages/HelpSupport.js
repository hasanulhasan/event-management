import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

const HelpSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email.",
    },
    {
      question: "How can I update my billing information?",
      answer:
        "Go to Account Settings > Billing and update your payment method or billing address. Changes take effect immediately.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise accounts.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime from Account Settings > Subscription. Your account will remain active until the end of your current billing period.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your data. All data is encrypted both in transit and at rest.",
    },
    {
      question: "How do I contact technical support?",
      answer:
        "You can reach our technical support team via the chat widget, email at support@company.com, or phone at +1-800-123-4567 during business hours.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      // In a real app, this would send the message to support
      alert("Message sent to support team!");
      setChatMessage("");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 bg-white shadow-sm border-b p-2 rounded-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 ">
              Help & Support
            </h1>
            <p className="text-gray-600 text-lg">
              We're here to help you get the most out of our platform
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 text-sm mb-3">Get help via email</p>
              <a
                href="mailto:support@company.com"
                className="text-blue-600 hover:underline"
              >
                support@company.com
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">
                Phone Support
              </h3>
              <p className="text-gray-600 text-sm mb-3">Mon-Fri, 9AM-6PM EST</p>
              <a
                href="tel:+1-800-123-4567"
                className="text-green-600 hover:underline"
              >
                +1-800-123-4567
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-3">Chat with our team</p>
              <button
                onClick={() => setChatOpen(true)}
                className="text-purple-600 hover:underline"
              >
                Start Chat
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="divide-y">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h3 className="font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="mt-4 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p>Saturday: 10:00 AM - 4:00 PM EST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Chat Widget */}
          {chatOpen && (
            <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg w-80 max-w-sm">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h4 className="font-semibold">Chat Support</h4>
                <button
                  onClick={() => setChatOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  ×
                </button>
              </div>

              <div className="p-4 h-64 overflow-y-auto bg-gray-50">
                <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                  <p className="text-sm text-gray-600">
                    Hi! How can we help you today?
                  </p>
                </div>
              </div>

              <form onSubmit={handleChatSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
