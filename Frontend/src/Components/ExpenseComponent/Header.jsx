import React from 'react'

function Header() {
  return (
    <>
        <div className='Navbar'>
            <ul className='Navul'>
                <li className='header'>
                    <h2>
                        <span class="material-symbols-outlined">account_balance_wallet</span>
                        Expense Tracker
                    </h2>
                </li>
                <li className='element'>
                    About
                </li>
                <li className='element'>
                    Change Password
                </li>
                <li className='element'>
                <button className='signout'>Sign Out</button>
                </li>
            </ul>      
        </div>


    </>
   
  )
}

export default Header