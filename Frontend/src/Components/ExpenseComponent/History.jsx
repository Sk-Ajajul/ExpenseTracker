import React from 'react';
import Transaction from './Transaction';

function History(){
  return (
    <>
        <h3 className='h3'>History</h3>
        <span >
          <button className='filter'>Filter 🔻</button>
        </span>
      
      <ul className='list'>
        <li className='list-head'>
        Description <span>Category</span><span>Date</span><span>Amount</span><button className="delete-btn">x</button>
        </li>
        
      </ul>
    </>
  )
}

export default History;