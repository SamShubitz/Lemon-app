import BookingForm from "./BookingForm";
import { useState, useReducer } from 'react';
import ConfirmationPage from "./ConfirmationPage"
import { fetchAPI } from "../api";
import restaurant from "../assets/restaurant.jpg";
import restaurantchef from "../assets/restaurantchef.jpg";


export default function BookingPage() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [submitted, setSubmitted] = useState(false);

    const initializeTimes = (date) => {
        return fetchAPI(date);
    };

    const updateTimes = (_, action) => {
        switch (action.type) {
            case 'update times':
                return fetchAPI(action.value);
            default:
                return fetchAPI(new Date());
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(new Date()));

    return (
        <div className="booking-page">
            <div className="booking-img-section">
                <img src={restaurant} alt="restaurant"/>
                <img src={restaurantchef} alt="chef"/>
            </div>
            {!submitted ? (
                <div className="booking-section">
                    <BookingForm setSubmitted={setSubmitted} phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber} availableTimes={availableTimes} updateTimes={dispatch}/>
                </div>
            ) : (
                <ConfirmationPage phoneNumber={phoneNumber}/>
            )}
        </div>
    );
}