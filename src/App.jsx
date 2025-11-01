import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import AboutPage from "./pages/AboutPage";
import Booking from "./pages/Booking";
import './App.css'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
