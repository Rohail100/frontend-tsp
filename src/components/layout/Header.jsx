import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
    <nav className="container mx-auto max-w-7xl flex justify-between items-center p-4">
      <Link to="/" className="text-3xl font-bold">Fixyland</Link>
      <div className="hidden lg:flex space-x-6 items-center">
        <Link to="/" className="hover:text-teal-500">About Us</Link>
        <Link to="/booking" className="hover:text-teal-500">Booking</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:text-teal-500 text-xl">
          <i className="fas fa-search"></i>
        </button>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-semibold">
          Book Now
        </button>
        <button className="lg:hidden text-xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  </header>
);

export default Header;