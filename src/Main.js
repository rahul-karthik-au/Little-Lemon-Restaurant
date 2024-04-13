import { useNavigate } from "react-router-dom";
import resImg from "./restauranfood.jpg";
import food1 from "./greek salad.jpg";
import food2 from "./desert.jpg";
import food3 from "./bruchetta.svg";

let id=1;

function Main(){
    const navigate = useNavigate();
    const special=[{imgSrc:food1,title:"abc",price:5,description:"abcdefghijklmnopqrst"},{imgSrc:food2,title:"xyz",price:10,description:"abcdefghijklmnopqrst"},{imgSrc:food3,title:"abc",price:5,description:"abcdefghijklmnopqrst"}]
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
                    <img src={resImg} className='main-img' alt='restaurantfood' />
                </div>
            </section>
            <section>
                <div className='heading'>
                    <h3>This week special!</h3>
                    <button className='btn'>Online Menu</button>
                </div>
                <div className='card-dash'>
                    {special.map((item)=>{ return(<div className="card" key={id++}>
                        <img src={item.imgSrc} alt={item.title} />
                        <div className='sub-heading'><h3>{item.title}</h3><h5>{item.price}</h5></div><p>{item.description}</p><button className='btn'>Order Now</button></div>)})}
                </div>
            </section>
        </main>
    )
}
export default Main;