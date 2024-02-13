
import './Login.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {

const [email,setEmail]= useState("")
const [password,setPassword]=useState("")
const navigate = useNavigate();

useEffect(()=>{
  const auth = localStorage.getItem('user');
  if(auth){
    navigate('/');
  } 
},[])

const handlelogin = async()=>{
console.warn("email,password",email,password);
let result= await fetch("http://127.0.0.1:5000/login",{
  method:'post',
  body:JSON.stringify({email,password}),
  headers:{
    'content-Type':'application/json'
  }
});
result=await result.json();
console.log(result);
if(result.name){
localStorage.setItem("user",JSON.stringify(result));
navigate("/");
}else{
  alert("please enter correct details");
}
}
  return (
    <div className='container'>
     <div className='header'>
    <div className='text'>Login</div>
    <div className='underline'></div>
     </div>
     <div className='inputs'>
        <div className='input'>
        <img src={email_icon} alt="" />
        <input type="email"placeholder='Email Id'onChange={(e)=>setEmail(e.target.value)}value={email}/>
        </div>
        <div className='input'>
        <img src={password_icon} alt="" />
        <input type="password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}value={password}/>
        </div>

        <div className='submit-container'>
    <div className='submit'onClick={handlelogin}>login</div>
       </div>
     </div>
    </div>
    
  )
}

export default Login