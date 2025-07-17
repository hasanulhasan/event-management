/* eslint-disable jsx-a11y/anchor-is-valid */
import { Globe } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div>
              <div className="flex items-center mb-4">
               <img src="/Break-Buddy-2.png" alt="Logo" className="h-[88px] w-[280px] mt-3" />
              </div>
              <p className="text-gray-400">
                Your trusted partner for unforgettable travel experiences around the world.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/TermsConditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/Contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Flight Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hotel Reservations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tour Packages</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@mybreakbuddy.com</p>
                <p>📞 +1 (555) 123-4160</p>
                <p>📍 Great Barrier Reef, Queensland, Australia</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Break Buddy.</p>
          </div>
        </div>
      </footer>
  )
}
