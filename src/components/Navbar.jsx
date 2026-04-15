export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <h2 className="text-2xl font-bold text-orange-600">FoodieExpress</h2>
      <ul className="hidden md:flex gap-8 font-medium text-gray-700 cursor-pointer">
        <li className="hover:text-orange-600 transition">Home</li>
        <li className="hover:text-orange-600 transition">Menu</li>
        <li className="hover:text-orange-600 transition">Deals</li>
        <li className="hover:text-orange-600 transition">About Us</li>
      </ul>
      <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg">
        Cart
      </button>
    </nav>
  );
}