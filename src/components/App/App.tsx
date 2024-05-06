
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Products from '../Products/Products'


function App() {
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      
      < Footer />
    </>
  );
}

export default App;
