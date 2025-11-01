import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      <Link to="/" className="hover:underline">AboutUs</Link>
      <Link to="/book" className="hover:underline">Book</Link>
    </nav>
  );
}
