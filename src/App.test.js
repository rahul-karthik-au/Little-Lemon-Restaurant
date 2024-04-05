import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";


test("Renders the BookingForm heading", () => {
  render(<BookingForm timings={[]} dispatch={[]} />);
  const headingElement = screen.getByText(/Reservation Form/i);
  expect(headingElement).toBeInTheDocument();
});