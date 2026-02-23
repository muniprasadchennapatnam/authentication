import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import Nav from "./nav"
import Login from "./Login"
import Signup from "./signup"
import Dash from "./Dash"
import { useLocation } from "react-router-dom";
function App() {
  const loc=useLocation()
  const a=["/login","/signup","/dash"]
  const b=a.includes(loc.pathname)
  return (
   <div>
    {!b && <Nav/>}
     
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dash"  element={<Dash/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
