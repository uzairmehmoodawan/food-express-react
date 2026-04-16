import FoodCard from '../components/FoodCard';
import pizzaImg from '../assets/pizzaImg.png';
import wingsImg from '../assets/wingsImg.png';

export default function Deals() {
  const specialDeals = [
    { name: 'Family Combo', image: pizzaImg, price: '29.99', discount: '30% OFF' },
    { name: 'Student Deal', image: wingsImg, price: '5.99', discount: 'FREE DRINK' },
    { name: 'Weekend Feast', image: pizzaImg, price: '19.99', discount: 'BUY 1 GET 1' },
  ];

  return (
    <div className="py-12 px-4">
      <div className="bg-orange-100 rounded-3xl p-8 mb-12 text-center border-2 border-dashed border-orange-400">
        <h1 className="text-4xl font-black text-orange-600">🔥 HOT DEALS 🔥</h1>
        <p className="text-orange-800 mt-2 font-medium">Grab them before they are gone!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialDeals.map((deal, index) => (
          <div key={index} className="relative group">
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
              {deal.discount}
            </div>
            
            <FoodCard {...deal} />
          </div>
        ))}
      </div>
    </div>
  );
}