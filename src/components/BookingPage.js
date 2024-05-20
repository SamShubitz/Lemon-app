import BookingForm from "./BookingForm";

export default function BookingPage() {
    return (
        <>
            <div className="booking-img-section">
            <img src='restaurantchef.jpg' alt="chef"/>
            </div>
            <div className="booking-section">
                <h1>Make a reservation!</h1>
                <BookingForm />
            </div>
        </>
    );
}