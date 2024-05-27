import { useNavigate } from "react-router-dom";
import food from "/Users/rahulkarthik/Project/React-App/table_reservation/client/src/assets/restauranfood.jpg";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../App";

let id=1;

function Main(){
    const navigate = useNavigate();

    const useLoginContext=useContext(LoginContext);
    console.log(useLoginContext);
    const [special,setSpecial]=useState([])
    useEffect(()=>{
        async function top_dishes(){
            let response=await fetch("http://localhost:5050/api/top_dishes",{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
            })
            const data=await response.json();
            setSpecial(data)
            console.log(data)
        }
        top_dishes()
    },[])
    // const special=[{imgSrc:food1,title:"abc",price:5,description:"abcdefghijklmnopqrst"},{imgSrc:food2,title:"xyz",price:10,description:"abcdefghijklmnopqrst"},{imgSrc:food3,title:"abc",price:5,description:"abcdefghijklmnopqrst"}]
    return (
        <main>
            <section className='intro'>
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, error.</p>
                    <button className='btn' onClick={()=>navigate("/booking")}>Reserve Table</button>
                </div>
                <div>
                    <img src={food} className='main-img' alt='restaurantfood' />
                </div>
            </section>
            <section>
                <div className='heading'>
                    <h3>This week special!</h3>
                    <button className='btn'>Online Menu</button>
                </div>
                <div className='card-dash'>
                    {special.map((item)=>{ return(<div className="card" key={id++}>
                        <img src={item.Dish_img} alt={item.Dish_Name} />
                        <div className='sub-heading'><h3>{item.Dish_Name}</h3><h5>{item.Price.$numberDecimal}</h5></div><p>{item.Dish_Desc}</p><button className='btn'>Order Now</button></div>)})}
                </div>
            </section>
        </main>
    )
}
export default Main;