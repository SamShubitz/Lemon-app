import MainPage from './MainPage';
import BookingPage from './BookingPage';
import Template from './Template';
import Chicago from './Chicago';
import { Routes, Route } from 'react-router-dom';


export default function Routing() {
    return (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<Chicago />} />
          <Route path="/menu" element={<Template />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/order-online" element={<Template />} />
          <Route path="/login" element={<Template />} />
        </Routes>
    );
}