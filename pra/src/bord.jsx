import React from 'react'
import { useNavigate } from 'react-router-dom'
const Bord = () => {
    const nav=useNavigate()
    const fun=(()=>{
        localStorage.clear()
        nav("/")
    })
  return (
    <div className="bord">
        <h4>pappula bandi</h4>
        <button onClick={fun}>logout</button>
        
    </div>
  )
}

export default Bord