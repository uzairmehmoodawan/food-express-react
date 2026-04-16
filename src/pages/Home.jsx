import Hero from '../components/Hero';
import FoodCard from '../components/FoodCard';

// Images import
import pastaImg from '../assets/pastaImg.png';
import pizzaImg from '../assets/pizzaImg.png';
import wingsImg from '../assets/wingsImg.png';

function Home() {
  const dishes = [
    { name: 'Spicy Pasta', image: pastaImg, price: '14.99' },
    { name: 'Paneer Pizza', image: pizzaImg, price: '12.99' },
    { name: 'Tandoori Wings', image: wingsImg, price: '9.99' },
    { name: 'Cheese Burger', image: pastaImg, price: '10.99' }
  ];

  return (
    <>
      <Hero />
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <FoodCard key={index} {...dish} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;