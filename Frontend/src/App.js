import Nav from "./Components/NavComponents/Nav";
import './App.css'
import Signup from "./Components/Signuppages/Signup";
import Login from "./Components/LoginPages/Login"
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import PrivateComponent from "./Components/PrivateComponent";
import Logout from './Components/Logoutpage/Logout';
import About  from "./Components/ExpenseComponent/About";
import Header from "./Components/ExpenseComponent/Header";
import AddTranscation from "./Components/ExpenseComponent/AddTranscation";
import Transaction from "./Components/ExpenseComponent/Transaction"
import Front  from "./Components/Screen/Front";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>}/>
       <Route path="/signup"element={<Signup/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/logout"element={<Logout/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/header"element={<Header/>}/>
      <Route path="/addtransaction"element={<AddTranscation/>}/>
     <Route path="/transaction"element={<Transaction/>}/>
      </Routes>
      </BrowserRouter>
      <Front/>
    </div>
  );
}

export default App;
