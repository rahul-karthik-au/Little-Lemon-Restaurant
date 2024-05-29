import { useState,useContext,useEffect } from "react";
import { LoginContext } from '../App';

function BookingForm(props){
    const useLoginContext=useContext(LoginContext);

    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [guests, setGuests] = useState("");
    const [occasion,setOccasion] = useState("--select occasion--");
    const [bookingHistory,setBookingHistory]=useState([])

    function getIsFormValid(){
        return (date && time && (guests>0 && guests<11) && occasion !== "--select occasion--");
    }

    function clearForm(){
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    async function handleSubmit(e){
        console.log(date,time,guests,occasion);
        e.preventDefault();
        let response = await fetch("http://localhost:5050/api/table_reservation",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email:useLoginContext.userName,date:date,time:time,no_of_guest:guests,occasion:occasion}),
        }) 
        console.log(response.status)
        props.submitForm(e)
        clearForm();
    }
    useEffect(()=>{
        async function getHistory(){
            let response=await fetch("http://localhost:5050/api/table_reservation/"+useLoginContext.userName,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
        })
        const data=await response.json();
        setBookingHistory(data)
        console.log(data)
        }
        getHistory()
    },[useLoginContext.userName])

    return(
        <>
        <div className="form-box">
        <h1>Reservation Form</h1>
        <form>
            <label htmlFor="res-date">Choose date
            <input type="date" id="res-date" value={date} onChange={(e) => { 
               setDate(e.target.value);
               props.dispatch({payload:{date:e.target.value}}) 
             }} required></input></label>

            <label htmlFor="res-time">Choose time
            <select id="res-time" value={time} onChange={(e) => { 
               setTime(e.target.value); 
             }} required>
                {props.timings.map((t)=>{return <option key={t}>{t}</option>})}
            </select></label>

            <label htmlFor="guests">Number of guests
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => { 
               setGuests(e.target.value); 
             }} required></input></label>

            <label htmlFor="occasion">Occasion
            <select id="occasion" value={occasion} onChange={(e) => { 
               setOccasion(e.target.value); 
             }} required>
                <option>--select occasion--</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            </label>
            <button className="btn" disabled={!getIsFormValid()} onClick={handleSubmit} aria-label="On Click">Make Your Reservation</button>
        </form>
        </div>
        <div>
            {bookingHistory.length !==0 ?  <BookingHistory history= {bookingHistory} />:(<p>No Booking History</p>)}
        </div>
        </>
    ) 
}
function BookingHistory(props){
    return(
        <div class="booking-table">
            <h1>Booking History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>No of Guest</th>
                        <th>Occasion</th>
                    </tr>
                </thead>
                <tbody>
                    {props.history.map((h)=>{
                        return(<tr key={h.Date}><td>{h.Date}</td><td>{h.Time}</td><td>{h.No_of_Guest}</td><td>{h.Occasion}</td></tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BookingForm; 