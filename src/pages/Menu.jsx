import { useState } from 'react'; // 1. Hook import ki
import FoodCard from '../components/FoodCard';
import pizzaImg from '../assets/pizzaImg.png'; 
import pastaImg from '../assets/pastaImg.png';

export default function Menu() {
  // 2. State banayi: 'selectedCategory' ki value shuru mein 'All' hogi
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allDishes = [
    { name: 'Pepperoni Pizza', image: pizzaImg, price: '15.99', category: 'Pizza' },
    { name: 'Creamy Pasta', image: pastaImg, price: '12.49', category: 'Pasta' },
    { name: 'Veggie Delight', image: pizzaImg, price: '13.99', category: 'Pizza' },
  ];

  // 3. Logic: Sirf wo dishes nikalo jo selected category se match karein
  const filteredDishes = selectedCategory === 'All' 
    ? allDishes 
    : allDishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Explore Our Menu</h1>
      </header>

      {/* Categories Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {['All', 'Pizza', 'Pasta', 'Burgers'].map(cat => (
          <button 
            key={cat} 
            // 4. Click karne par State update hogi
            onClick={() => setSelectedCategory(cat)} 
            // 5. Dynamic Styling: Jo select ho uska rang orange ho jaye
            className={`px-5 py-2 rounded-full transition ${
              selectedCategory === cat ? 'bg-orange-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 6. GHALTI FIX: Ab hum 'filteredDishes' ko map kar rahe hain */}
        {filteredDishes.map((dish, index) => (
          <FoodCard key={index} {...dish} />
        ))}
      </div>
    </div>
  );
}