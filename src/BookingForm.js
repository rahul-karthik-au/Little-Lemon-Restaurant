import { useState } from "react";

function BookingForm(props){
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [guests, setGuests] = useState("");
    const [occasion,setOccasion] = useState("--select occasion--");

    function getIsFormValid(){
        return (date && time && (guests>0 && guests<11) && occasion !== "--select occasion--");
    }

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
             }} required></input>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => { 
               setTime(e.target.value); 
             }} required>
                {props.timings.map((t)=>{return <option key={t}>{t}</option>})}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => { 
               setGuests(e.target.value); 
             }} required></input>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => { 
               setOccasion(e.target.value); 
             }} required>
                <option>--select occasion--</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button className="btn" disabled={!getIsFormValid()} onClick={handleSubmit} aria-label="On Click">Make Your Reservation</button>
        </form>
        </>
    ) 
}

export default BookingForm; 