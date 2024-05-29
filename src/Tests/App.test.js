import { render, screen } from "@testing-library/react";
import BookingPage from "../components/BookingPage";
import { initializeTimes } from './initializeTimes';



test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make a reservation!");
    expect(headingElement).toBeInTheDocument();
})


describe('initializeTimes', () => {
    test('returns a non-empty array of times for the given date', async () => {
      const mockFetchAPI = jest.fn().mockResolvedValue(['17:00', '23:30']);
      jest.mock('../api', () => ({
        fetchAPI: mockFetchAPI
      }));
      const availableTimes = await initializeTimes(new Date());
      expect(Array.isArray(availableTimes)).toBe(true);
      expect(availableTimes.length).toBeGreaterThan(0);
    });
  });