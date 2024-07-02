import HomePage from './HomePage/HomePage';
import BookingPage from './BookingSection/BookingPage';
import Template from './Common/Template';
import Chicago from './HomePage/Chicago';
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
          <Route path="*" element={<HomePage />} />
        </Routes>
    );
}