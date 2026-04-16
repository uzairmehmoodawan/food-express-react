import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Tag, Info, X, Menu, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(false); // Menu band karne ke liye helper

  // Active link highlight karne ke liye logic
  const navLinkClass = (path) => `
    flex items-center gap-4 p-3 rounded-xl transition-all duration-200
    ${location.pathname === path 
      ? 'bg-orange-50 text-orange-600 shadow-sm' 
      : 'text-gray-600 hover:bg-gray-50 hover:text-orange-600'}
  `;

  return (
    <nav className="relative py-6 flex justify-between items-center bg-white z-50 px-4 max-w-7xl mx-auto">
      {/* 1. LOGO */}
      <Link to="/" className="text-2xl font-bold text-orange-600">
        FoodieExpress
      </Link>

      {/* 2. DESKTOP NAVIGATION (Laptop par dikhega) */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li><Link to="/" className={`hover:text-orange-600 transition ${location.pathname === '/' ? 'text-orange-600' : ''}`}>Home</Link></li>
        <li><Link to="/menu" className={`hover:text-orange-600 transition ${location.pathname === '/menu' ? 'text-orange-600' : ''}`}>Menu</Link></li>
        <li><Link to="/deals" className={`hover:text-orange-600 transition ${location.pathname === '/deals' ? 'text-orange-600' : ''}`}>Deals</Link></li>
        <li><Link to="/about" className={`hover:text-orange-600 transition ${location.pathname === '/about' ? 'text-orange-600' : ''}`}>About Us</Link></li>
      </ul>

      {/* 3. DESKTOP CART (Laptop par dikhega) */}
      <div className="hidden md:flex items-center">
        <button className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700 transition shadow-md">
          <ShoppingCart size={20} />
          <span>Cart (0)</span>
        </button>
      </div>

      {/* 4. MOBILE ICONS (Sirf Mobile par dikhenge) */}
      <div className="flex items-center gap-4 md:hidden">
        <div className="relative">
          <ShoppingCart className="text-gray-700 w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] rounded-full px-1.5 font-bold">0</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-800">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 5. MOBILE SIDEBAR (Drawer) */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b flex justify-between items-center bg-orange-600 text-white">
          <span className="font-bold text-xl">Main Menu</span>
          <X onClick={toggleMenu} className="cursor-pointer" />
        </div>

        <div className="flex-grow p-4 space-y-2 mt-4">
          <Link to="/" onClick={toggleMenu} className={navLinkClass('/')}>
            <Home size={20} /> <span className="font-semibold">Home</span>
          </Link>
          <Link to="/menu" onClick={toggleMenu} className={navLinkClass('/menu')}>
            <UtensilsCrossed size={20} /> <span className="font-semibold">Menu</span>
          </Link>
          <Link to="/deals" onClick={toggleMenu} className={navLinkClass('/deals')}>
            <Tag size={20} /> <span className="font-semibold">Hot Deals</span>
          </Link>
          <div className="h-[1px] bg-gray-100 my-4"></div>
          <Link to="/about" onClick={toggleMenu} className={navLinkClass('/about')}>
            <Info size={20} /> <span className="font-semibold">About Us</span>
          </Link>
        </div>

        <div className="p-6 bg-gray-50 text-sm text-gray-500">
          <p>© 2026 FoodieExpress</p>
          <p className="mt-1">Handcrafted with ❤️ by Uzair</p>
        </div>
      </div>

      {/* 6. OVERLAY */}
      {isOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
        ></div>
      )}
    </nav>
  );
}