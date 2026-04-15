export default function FooterCard() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">FoodieExpress</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing your favorite meals from the kitchen directly to your doorstep in 20 minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">Menu</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Track Order</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Special Offers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 123 Foodie Street, PK</li>
              <li>📞 +92 300 1234567</li>
              <li>✉️ support@foodieexpress.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email..." 
                className="bg-gray-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button className="bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 transition font-bold">
                Go
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          © 2026 FoodieExpress. All rights reserved.
        </div>
      </div>
    </footer>
  );
}