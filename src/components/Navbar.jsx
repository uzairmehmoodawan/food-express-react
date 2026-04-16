import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      {/* Logo ko Link bana dein taake click karne par Home par jaye */}
      <Link to="/">
        <h2 className="text-2xl font-bold text-orange-600 cursor-pointer">FoodieExpress</h2>
      </Link>

      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li className="hover:text-orange-600 transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-600 transition">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="hover:text-orange-600 transition">
          <Link to="/deals">Deals</Link>
        </li>
        <li className="hover:text-orange-600 transition">
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg">
        Cart
      </button>
    </nav>
  );
}