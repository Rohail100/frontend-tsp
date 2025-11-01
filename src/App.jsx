import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import './App.css'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
