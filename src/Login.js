import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { app } from './DB';
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore"; 


export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const db=getFirestore(app);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        const authTable=doc(db,"Authentication",email)
        console.log(email,password);
        const docSnap = await getDoc(authTable);
        if(docSnap.exists()){
            if(docSnap.data().password !==password){
                alert("wrong password")
                setPassword("");
            }
            else{
                navigate("/")
            }
        }
        else{
            alert("Email does't exist");
            navigate("/register");
        }
        
    }
  return (
    <>
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
    <p>Don't have an account? <Link to="/register">Register</Link></p>
    <button type="submit" onClick={handleSubmit}>Login</button>
    </form>
    
    </>
  )
}
