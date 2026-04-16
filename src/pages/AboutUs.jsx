import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  const contactInfo = [
    { icon: <Clock className="text-orange-600" />, title: "Opening Hours", detail: "Mon - Sun: 10:00 AM - 11:00 PM" },
    { icon: <MapPin className="text-orange-600" />, title: "Our Location", detail: "123 Food Street, Karachi, Pakistan" },
    { icon: <Phone className="text-orange-600" />, title: "Call Us", detail: "+92 300 1234567" },
    { icon: <Mail className="text-orange-600" />, title: "Email Us", detail: "hello@foodieexpress.com" },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-gray-900 mb-4">About <span className="text-orange-600">Us</span></h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We are more than just a food delivery service. We are a team of foodies 
          dedicated to bringing the freshest and most delicious meals to your doorstep.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-gray-50 rounded-3xl overflow-hidden p-8 md:p-0">
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000" 
            alt="Our Restaurant" 
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pr-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FoodieExpress started in 2024 with a simple mission: to make high-quality 
            restaurant food accessible to everyone. We noticed that people often had 
            to choose between speed and quality, and we wanted to bridge that gap.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we partner with the best local chefs and use the freshest ingredients 
            to ensure every bite is a celebration of flavor.
          </p>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-4 text-2xl">
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}