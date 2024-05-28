import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Template from './Template';
import Chicago from './Chicago';
import { Routes, Route } from 'react-router-dom';

export default function Main() {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Chicago />} />
          <Route path="/menu" element={<Template />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/order-online" element={<Template />} />
          <Route path="/login" element={<Template />} />
        </Routes>
    );
}