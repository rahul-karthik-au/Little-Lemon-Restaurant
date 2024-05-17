import React from 'react';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../util/DB';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'; 
import { LoginContext } from '../App';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


export default function Register() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const db=getFirestore(app);
    const navigate = useNavigate();

    const useLoginContext=useContext(LoginContext);
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(email,password);
        const authTable=doc(db,"Authentication",email);
        setDoc(authTable,{password:password});
        useLoginContext.setIsLoggedIn(true);
        navigate('/');
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
