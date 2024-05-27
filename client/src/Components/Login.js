import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LoginContext } from '../App';
import Header from './Layout/Header';
import Footer from './Layout/Footer';



export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const useLoginContext=useContext(LoginContext);
    console.log(useLoginContext);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        let response= await fetch("http://localhost:5050/api/"+email,{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
          }
        })

        if(response.status===200){
          const data=await response.json()
          console.log(data)
          if(data.Password !== password){
              alert("wrong password")
              setPassword("");
          }
          else{
              navigate("/")
              useLoginContext.setIsLoggedIn(true)
              useLoginContext.setUserName(email)
          }
      }
      else{
          alert("Email does't exist");
          navigate("/register");
      }
        
    }
  return (
    <>
    <Header />
    <div className='form-box'>
    <h1>Login</h1>
    <form>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" value={email} onChange={(e) => { 
               setEmail(e.target.value);
             }} required></input>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" value={password} onChange={(e) => { 
               setPassword(e.target.value);
             }} required></input>
             <div><p>Don't have an account? <Link to="/register">Register</Link></p><button type="submit" onClick={handleSubmit}>Login</button></div>
    
    
    </form>
    </div>
    <Footer />
    </>
  )
}
