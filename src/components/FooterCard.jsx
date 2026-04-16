import { Link } from 'react-router-dom';
// FontAwesome icons import kar rahe hain
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaPaperPlane 
} from 'react-icons/fa';

export default function FooterCard() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-500">FoodieExpress</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing your favorite meals from the kitchen directly to your doorstep in 20 minutes.
            </p>
            <div className="flex gap-5 text-xl text-gray-400">
              <FaFacebook className="hover:text-orange-500 cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer transition-colors" />
              <FaTwitter className="hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-orange-500 transition">Our Menu</Link></li>
              <li><Link to="/deals" className="hover:text-orange-500 transition">Hot Deals</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span>123 Foodie Street, Karachi, PK</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span>support@foodieexpress.com</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2 inline-block">Subscribe</h3>
            <p className="text-gray-400 text-xs mb-4">Get updates on new dishes and offers!</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-orange-500 outline-none"
              />
              <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition flex items-center justify-center">
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs">
          <p>© 2026 FoodieExpress. Built with ❤️ by Uzair</p>
        </div>
      </div>
    </footer>
  );
}