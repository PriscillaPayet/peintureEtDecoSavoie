
import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import Home from '../Home/Home'


function App() {
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      < Footer />
    </>
  );
}

export default App;
