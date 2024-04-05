import { useState } from "react";

function BookingForm(props){
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [guests, setGuests] = useState("");
    const [occasion,setOccasion] = useState("");

    function clearForm(){
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    function handleSubmit(e){
        console.log(date,time,guests,occasion);
        e.preventDefault(); 
        props.submitForm(e)
        clearForm();
    }

    return(
        <>
        <h1>Reservation Form:</h1>
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => { 
               setDate(e.target.value);
               props.dispatch({payload:{date:e.target.value}}) 
             }}></input>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => { 
               setTime(e.target.value); 
             }}>
                {props.timings.map((t)=>{return <option key={t}>{t}</option>})}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => { 
               setGuests(e.target.value); 
             }}></input>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => { 
               setOccasion(e.target.value); 
             }}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input className="btn" type="submit" value="Make Your reservation" onClick={handleSubmit}></input>
        </form>
        </>
    ) 
}

export default BookingForm;