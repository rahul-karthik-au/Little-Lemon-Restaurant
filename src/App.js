import { Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import './App.css';
import ConfirmedBooking from "./ConfirmedBooking";
import Login from "./Login";
import Register from "./Register";
import { createContext,useState } from "react";

export const LoginContext=createContext();

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={isLoggedIn?<BookingPage />:<Navigate to='/login' />}></Route>
      <Route path="/booking_confirmed" element={isLoggedIn?<ConfirmedBooking />:<Navigate to='/login' /> }></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      </Routes>
    </LoginContext.Provider>
    
  );
}


export default App;
