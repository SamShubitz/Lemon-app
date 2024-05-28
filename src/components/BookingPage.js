import BookingForm from "./BookingForm";
import { useState } from 'react';
import ConfirmationPage from "./ConfirmationPage"

export default function BookingPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="booking-page">
            <div className="booking-img-section">
                <img src='restaurant.jpg' alt="restaurant"/>
                <img src="restaurantchef.jpg" alt="chef"/>
            </div>
            {!submitted ? (
                <div className="booking-section">
                    <BookingForm setSubmitted={setSubmitted}/>
                </div>
            ) : (
                <ConfirmationPage />
            )}
        </div>
    );
}