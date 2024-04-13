import { Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import './App.css';
import ConfirmedBooking from "./ConfirmedBooking";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    <Route path="/booking_confirmed" element={<ConfirmedBooking />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}


export default App;
