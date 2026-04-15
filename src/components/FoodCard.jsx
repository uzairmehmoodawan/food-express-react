export default function FoodCard({ name, image, price }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 text-center shadow-sm hover:shadow-2xl transition-all duration-300 group">
      <div className="overflow-hidden rounded-2xl mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-extrabold text-orange-600">${price}</span>
        <button className="bg-orange-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold hover:bg-black transition-colors">
          +
        </button>
      </div>
    </div>
  );
}