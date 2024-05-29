import { render, screen } from "@testing-library/react";
import BookingForm from './components/Booking/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Make a reservation!");
    expect(headingElement).toBeInTheDocument();
})

