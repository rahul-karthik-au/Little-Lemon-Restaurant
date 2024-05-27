import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function ConfirmedBooking(){
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(function(){
            navigate("/")
        }, 1500);
    })

    
    
    return(
        <>
        <Header />
        <p>Booking Confirmed!!</p>
        <Footer />
        </>
    )
}

export default ConfirmedBooking;