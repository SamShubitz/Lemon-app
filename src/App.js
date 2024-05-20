import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import BookingPage from './components/BookingPage';
import Template from './components/Template';
import Chicago from './components/Chicago';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<Chicago />} />
          <Route path="/menu" element={<Template />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/order-online" element={<Template />} />
          <Route path="/login" element={<Template />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
