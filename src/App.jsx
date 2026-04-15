import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FoodCard from './components/FoodCard';
import FooterCard from './components/FooterCard'; // Ensure file name matches exactly

// Images import
import pastaImg from './assets/pastaImg.png';
import pizzaImg from './assets/pizzaImg.png';
import wingsImg from './assets/wingsImg.png';

function App() {
  const dishes = [
    { name: 'Spicy Pasta', image: pastaImg, price: '14.99' },
    { name: 'Paneer Pizza', image: pizzaImg, price: '12.99' },
    { name: 'Tandoori Wings', image: wingsImg, price: '9.99' },
    { name: 'Cheese Burger', image: pastaImg, price: '10.99' } 
  ];

  return (
    /* flex-col aur min-h-screen isliye taake footer hamesha bottom par rahe */
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Main Content Area */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <Navbar />
        <Hero />
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dishes.map((dish, index) => (
              <FoodCard key={index} {...dish} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section - Container se bahar taake full width nazar aaye */}
      <FooterCard />
      
    </div>
  );
}

export default App;