import React from 'react'
import "./Front.css"

function Front() {
  return (
    <div>
        {/* <div className='top-nav'>
            <h2>
                <span class="material-symbols-outlined">account_balance_wallet</span>
                Expense Tracker
            </h2>
            <button className='main-btn'>SignUp / Login</button>
        </div> */}
        
        <div className='top'>
            <h1 className='top-font'>Welcome to <span>Expense Tracker.</span>
            <section>Track your Money, Smartly.</section>
            </h1>
            
        </div>
        
        <div className='features'>
            <div className='blocks'><span class="material-symbols-outlined block-icon">
              group</span>
              <h3>Build For Everyone</h3>
              <p className='block-text'>Wheather you are a Student, Working Professional, Homemaker, Bussinessman or anyone else. Everyone can use it.</p>
            </div>
            <div className='blocks'><span class="material-symbols-outlined block-icon">
              grid_view</span>
              <h3>Designed to be Modern</h3>
              <p className='block-text'>Designed with the latest design trends in mind. Expense Tracker feels modern, minimal, and beautiful.</p>
            </div>
            <div className='blocks'><span class="material-symbols-outlined block-icon">
              mood</span>
              <h3>Easy to use</h3>
              <p className='block-text'>Expense Tracker is built to make your life easier. Simple UI makes it easy to use.</p>
            </div>
        </div>

        <div className='more-features'>

          <div className='flex-container'>
            <img className= "flex-img" src="https://i.pinimg.com/736x/76/6b/36/766b36057de48a0585f88cc85b88fa66.jpg"/>
            <div className='slide-left'>
              <h1>Authenticated and Secure</h1>
              <section className='more-text'>
                Our Expense Tracker Application comes with secure SignUp and Login so that you do not have to worry about your data.
                Just Login with your credentials or SignUp to make an account and keep track of all your Expenses.
              </section>
            </div> 
          </div>

          <div className='flex-container'>
            <div className='slide-right'>
              <h1>Simple UI Dashboard</h1>
              <section className='more-text'>
                Best part of our Expense Tracker is it's simplified user dashboard. No over complicated dashboard, designed specifically keeping in mind the views of all age groups so that no one feels stressed over little things. Minimal Design that looks modern and beautiful.
              </section>
            </div> 
            <div className='img-skewed slide-left'><img className="skewed-img" src="Images/Dashboard.png" alt='Dashbord' /></div>     
          </div>     

        </div>

        <div className='footer'>
            <h2>
              <span class="material-symbols-outlined">
                account_balance_wallet
              </span>
              Expense Tracker
            </h2>
            <h5>Copyright @ {new Date().getFullYear()}</h5>
        </div>

    </div>
  )
}

export default Front