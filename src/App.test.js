import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage";
// import { initializeTimes } from "./components/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make a reservation!");
    expect(headingElement).toBeInTheDocument();
})

/*
describe('initializeTimes', () => {
    test('returns a non-empty array of times for the given date', async () => {
      const mockFetchAPI = jest.fn().mockResolvedValue(['17:00', '23:30']);
      jest.mock('./api', () => ({
        fetchAPI: mockFetchAPI
      }));
      const bookingTimes = await initializeTimes(new Date());
      expect(Array.isArray(bookingTimes)).toBe(true);
      expect(bookingTimes.length).toBeGreaterThan(0);
    });
  });
  */