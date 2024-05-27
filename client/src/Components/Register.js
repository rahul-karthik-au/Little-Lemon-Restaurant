import React from 'react';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { LoginContext } from '../App';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


export default function Register() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

    const useLoginContext=useContext(LoginContext);
    
    async function handleSubmit(e){
        e.preventDefault();
        console.log(email,password);      
        
        let response=await fetch("http://localhost:5050/api",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:email,password:password}),
        })
        console.log(response)
        if(response.status === 200){
          useLoginContext.setUserName(email)
          useLoginContext.setIsLoggedIn(true);
          navigate('/');
        }
        else{
          alert("Account already exist")
          setEmail("")
          setPassword("")
        }
    }
  return (
    <>
    <Header />
    <div className='form-box'>
    <h1>Register</h1>
    <form>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" value={email} onChange={(e) => { 
               setEmail(e.target.value);
             }} required></input>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" value={password} onChange={(e) => { 
               setPassword(e.target.value);
             }} required></input>
             <div><p>Have an account? <Link to="/login">Login</Link></p><button type="submit" onClick={handleSubmit}>Sign Up</button></div>
    
    
    
    </form>
    </div>
    <Footer />
    </>
  )
}
