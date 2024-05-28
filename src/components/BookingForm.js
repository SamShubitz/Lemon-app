import { useState, useEffect } from 'react'
import { fetchAPI, submitAPI } from '../api'

export default function BookingForm({setSubmitted}) {

const [date, setDate] = useState('');
const [timeSlot, setTimeSlot] = useState('');
const [guests, setGuests] = useState(1);
const [occasion, setOccasion] = useState('');
const [availableTimes, setAvailableTimes] = useState([]);

const initializeTimes = () => {
    const initialDate = new Date();
    setDate(initialDate)
}

useEffect(() => {
    initializeTimes();
}, []);

useEffect(() => {
    const updatedTimes = fetchAPI(new Date(date));
    setAvailableTimes(updatedTimes);
  }, [date]);

const handleChange = (e) => {
    setDate(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        date,
        timeSlot,
        guests,
        occasion,
      };
    const response = submitAPI(formData)
    setSubmitted(response);
}

return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <h1>Make a reservation!</h1>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required value={date} onChange={handleChange}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
            {availableTimes.map((timeSlot) => (
                <option key={timeSlot} value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                    {timeSlot}
                </option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" required value={guests} onChange={(e) => setGuests(e.target.value)}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
    </form>
    );
}