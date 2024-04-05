import { useReducer} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const updateTimes=(availabeTimes,action)=>{
    availabeTimes=fetchAPI(action.payload.date);
    return availabeTimes;
}
const seededGenerator = (date, hour) => {
    const m = 9;
    const d = 10;
    const result = ((d + hour) % m ) / 10;
  
    return result;
  }
  
  const fetchAPI = (date) => {
    let result = [];
  
    result.push("--- Select a Time ---")
  
    for (let hour = 15; hour <= 23; hour++) {
      if(seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
      if(seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
    }
  
    return result;
  };
  
  const submitAPI = formData => true;



function BookingPage(){
    
    const initialTimings=()=>{return fetchAPI(new Date())};
    const [availabeTimes,dispatch]=useReducer(updateTimes,initialTimings())

    const navigate = useNavigate();

    const submitForm=(e)=>{
        if(submitAPI(e)){
            navigate("/booking_confirmed")
        }
    }
    

    return (
        <>
        <Header />
        <BookingForm timings={availabeTimes} dispatch={dispatch} submitForm={submitForm} />
        <Footer />
        </>
    )
}

export default BookingPage;