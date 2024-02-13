import React from 'react'
import  "./nav.css"
import {Link,useNavigate} from 'react-router-dom'
const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/signup');
  }
  return (
     <div className='nav'>
       {/* <img src="https://pbs.twimg.com/profile_images/1451994761984811009/vKP9xyXB_400x400.jpg" alt="log" className='logo1'/>  */}
     <div className='nav-left'>
     <h3>{auth?
    <>
      <Link onClick={logout}to="/signup" className='logo2'>logout</Link>
  <Link to="/about"className='logo2'>About</Link>
  <Link to="/header"className='logo2'>Header</Link>
  <Link to="/history"className='logo2'>History</Link>

  <Link to="/addtransaction"className='logo1'>AddTransaction</Link>
 <Link to="/transaction"className='logo1'>Transaction</Link>
 <Link to="/balance"className='logo3'>Balance</Link>
    </>
     :
    <>
    <Link to="/login" className='logo2'>Login</Link>
    <Link to="/signup"className='logo2'>SignUp</Link>
    </>
}</h3>
</div>  
     <ul className='nav-ul'>
      <h1 className='nav-h1'>Expenses Tracker Application</h1>
      </ul>  
    </div>
    
  )
}

export default  Nav 
