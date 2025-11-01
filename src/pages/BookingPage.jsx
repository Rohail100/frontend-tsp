import Hero from "../components/common/Hero";
import BookingForm from "../components/booking/BookingForm";
import LuxuryRooms from "../components/booking/LuxuryRooms";

const BookingPage = () => (
  <>
    <Hero page={"Booking"} />
    <BookingForm />
    <LuxuryRooms />
  </>
);

export default BookingPage;
