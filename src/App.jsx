import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/book" element={<Booking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
