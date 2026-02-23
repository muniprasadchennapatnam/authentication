import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [username , setUsername]=useState("")
  const [password , setPassword]=useState("")
  const userdata={username,password}
  const nav=useNavigate()
  const fun=async(e)=>{
    e.preventDefault()
    console.log(userdata)
    const res=await fetch("http://localhost:3500/userdata/login",{
      method:"POST",
      headers:{
        "Content-Type":"Application/json",

      },
      body:JSON.stringify(userdata)
  })
   const data=await res.json()
   console.log(data)
   if(res.ok){
      localStorage.setItem("token", data.token)
      nav("/dash") 
   }else{
    nav("/signup")
   }
  }
  return (
    <form onSubmit={fun}>
    <div className='log'>
      <div className="login">
        <input type="email" placeholder="enter email" className="email" onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="enter password" className='pass' onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" >login</button>
      </div>
    </div>
    </form>
  )
}

export default Login