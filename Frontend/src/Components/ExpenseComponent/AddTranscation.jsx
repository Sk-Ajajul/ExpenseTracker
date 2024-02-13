import React,{useState} from "react";

function AddTranscation() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
 
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div>
                <label htmlFor="amount">
                    Amount <br />
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required/>
                </div>   

                <div>
                <label htmlFor="text">Description</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/>
                </div>

                <div>
                <label htmlFor="Category">Category</label>
                <select>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Utility">Utility</option>
                    <option value="Others">Others..</option>
                </select>
                
                </div>

                <button className="btn">Add transaction</button>

            </form>
        </>
  )
}

export default AddTranscation