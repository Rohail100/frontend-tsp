import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import { StoreProvider } from "./context/StoreContext";
import './App.css'

function App() {
  return (
    <StoreProvider>
      <AppLayout>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </AppLayout>
    </StoreProvider>
  );
}

export default App;
