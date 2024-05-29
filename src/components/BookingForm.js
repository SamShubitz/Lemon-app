import { useState, useEffect } from 'react'
import { fetchAPI, submitAPI } from '../api'

export default function BookingForm({phoneNumber, setPhoneNumber, setSubmitted}) {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [date, setDate] = useState('');
const [timeSlot, setTimeSlot] = useState('');
const [guests, setGuests] = useState(1);
const [occasion, setOccasion] = useState('');
const [availableTimes, setAvailableTimes] = useState([]);
const [error, setError] = useState(false);

useEffect(() => {
    const updatedTimes = fetchAPI(new Date(date));
    setAvailableTimes(updatedTimes);
  }, [date]);

  const numberIsValid = () => {
    const phoneRegex = /^\d{10}$/;
    const strippedNumber = phoneNumber.replace(/\D/g, '');
    return phoneRegex.test(strippedNumber);
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (numberIsValid()) {
    const formData = {
        firstName,
        lastName,
        phoneNumber,
        date,
        timeSlot,
        guests,
        occasion,
    };
    const response = submitAPI(formData);
    setSubmitted(response);
    } else {
        setError(true);
    }
};

return (
    <form className="booking-form" onSubmit={handleSubmit}>
        <h1>Make a reservation!</h1>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" required value={firstName} aria-label="first name" onChange={(e) =>  setFirstName(e.target.value)} />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" required value={lastName} aria-label="last name" onChange={(e) => setLastName(e.target.value)} />
        <label htmlFor="phone-number">Phone Number</label>
        <input type="tel" id="phone-number" required value={phoneNumber} aria-label="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
        {error && <p className="error-text">Please enter a valid 10 digit number</p>}
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required value={date} aria-label="date" onChange={(e) => setDate(e.target.value)}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
            {availableTimes.map((timeSlot) => (
                <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                </option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" required value={guests} aria-label="number of guests" onChange={(e) => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" required value={occasion} aria-label="occasion" onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
        </select>
        <input type="submit" value="Make Your reservation" />
    </form>
    );
}