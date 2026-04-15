import burgerImg from '../assets/burger.png'; // Ensure filenames are correct

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-orange-50 p-8 md:p-16 rounded-[32px] gap-8 mt-12 overflow-hidden">
      
      {/* Left Content Section */}
      <div className="flex-1 space-y-6 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
          Craving? We Deliver in <span className="text-orange-600">20 Mins!</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
          Delicious meals from your favorite restaurants right to your doorstep. Fast & fresh.
        </p>
        <button className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl active:scale-95">
          Order Now
        </button>
      </div>

      {/* Right Image Section (Larger Burger) */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        <img 
          src={burgerImg} 
          alt="Large floating burger" 
          /* CHANGE HERE: Increase image width and add 3D depth */
          className="w-full max-w-sm md:max-w-xl lg:max-w-[600px] drop-shadow-[0_25px_30px_rgba(0,0,0,0.15)] animate-bounce-slow" 
          style={{ animationDuration: '3s' }}
        />
      </div>

    </div>
  );
}