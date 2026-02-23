import React from 'react'

import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className='img'>
    <div className="na">
        <div className="nav">
          <div className="title">
            <h4 >pappula bandi</h4>
          </div>
          <div className="but">
            <button><Link to="/login">login</Link></button>
            <button><Link to="/signup">sinup</Link></button>
         </div>
         
    </div>
    
    </div>
    <img src="/img-52.jpg"/>
</div>
  )
}

export default Nav