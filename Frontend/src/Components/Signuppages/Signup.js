import React, {useState,useEffect} from 'react'
import './Signup.css'
import user_icon from '../Assets/person.jpeg'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
const [error,setError]=useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [conformpassword,setConformpassword]=useState("");
const navigate = useNavigate();

useEffect(()=>{
 const auth = localStorage.getItem('user');
 if(auth){
  navigate('/');
 }
})
const collectData = async ()=>{
  console.warn(name,email,password,conformpassword);
let result=await fetch('http://127.0.0.1:5000/register',{
  method:'post',body:JSON.stringify({name,email,password,conformpassword}),
  headers:{
  'Content-Type':'application/json'
  },
});
result = await result.json();
console.warn(result);
localStorage.setItem("user",JSON.stringify(result));
navigate('/');
}
const checkValidation = (e)=>{
  const conform = e.target.value;
  setConformpassword(conform);
  if(password !== conform){
   setError("Conform password should be match with password"); 
  }
  else{
    setError("");
  }
}
  return (
    <div className='container'>
     <div className='header'>
    <div className='text'>Sign Up</div>
    <div className='underline'></div>
     </div>

     <div className='inputs'>
        <div className='input'>
        <img src={user_icon} alt="" />
          <input type="text" onChange={(e)=>setName(e.target.value)}value={name}placeholder='Name' />     
        </div>

        <div className='input'>
        <img src={email_icon} alt="" />
        <input type="email"onChange={(e)=>setEmail(e.target.value)}value={email}placeholder='Email Id' />
        </div>

        <div className='input'>
        <img src={password_icon} alt="" />
        <input type="password"onChange={(e)=>setPassword(e.target.value)}value={password} placeholder='Password'/>
        </div>

        <div className='input'>
        <img src={password_icon} alt="" />
        <input type="password"onChange={(e)=>checkValidation(e)}value={conformpassword} placeholder='Conform Password'/>
        </div>
     </div>
     <div className="forgot-password">Lost Password?<span>Click Here?</span></div>
    <div className='submit-container'>
    <button className='submit'onClick={collectData}>Sign Up</button>


    
    </div>
    </div>
    
  )
}

export default Signup