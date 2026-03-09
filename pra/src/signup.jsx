import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const [conpassword, setConpassword]=useState("")
  const nav=useNavigate()
  
  const fun=(async(e)=>{

    e.preventDefault()
    const userdetails={
    username,
    password
  }
     console.log(userdetails)
     if(conpassword==password){
      try{
    const res=await fetch("http://localhost:3500/userdata/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userdetails)
      
    })
    
  if (res.ok) {
        nav("/login");   // navigate only if signup success
      }

}
catch(e){

}
     
     }
     else{
      alert("check passward")
     }
  })

  return (
    <form onSubmit={fun}>
    <div className='signup'>
      <div className="sign">
        <input type="email"  placeholder='enter email' onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password"  placeholder='enter password'onChange={(e)=>setPassword(e.target.value)}/>
        <input type="password"  placeholder='conform password' onChange={(e)=>setConpassword(e.target.value)}/>
       <button type="submit" >signup</button>
      </div>
    </div>
     </form>
  )
}

export default Signup