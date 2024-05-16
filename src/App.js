import { Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./Components/HomePage";
import BookingPage from "./Components/BookingPage";
import './App.css';
import ConfirmedBooking from "./Components/ConfirmedBooking";
import Login from "./Components/Login";
import Register from "./Components/Register";
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
