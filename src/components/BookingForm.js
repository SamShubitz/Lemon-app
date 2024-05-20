import { useState } from 'react'

export default function BookingForm() {

const [date, setDate] = useState('')
const [guests, setGuests] = useState(1);
const [occasion, setOccasion] = useState('');
const [time, setTime] = useState('');

return (
<form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" id="res-date"  required value={date} onChange={(e) => setDate(e.target.value)}/>
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
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