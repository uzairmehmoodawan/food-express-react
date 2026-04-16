import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterCard from './components/FooterCard';

// Pages import
import Home from './pages/Home';
import Menu from './pages/Menu';
import Deals from './pages/Deals';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Main Content Wrapper */}
        <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>

        {/* Footer hamesha screen ke bottom par rahega */}
        <FooterCard />
      </div>
    </Router>
  );
}

export default App;