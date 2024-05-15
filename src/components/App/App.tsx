
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Products from '../Products/Products';
import Floors from '../Floors/Floors';
import Walls from '../Walls/Walls';
import Paints from '../Paints/Paints';
import Contact from "../Contact/Contact";


function App() {
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/floors" element={<Floors />} />
        <Route path="/products/walls" element={<Walls />} />
        <Route path="/products/paints" element={<Paints />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      < Footer />
    </>
  );
}

export default App;
