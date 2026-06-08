import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Hello</h3>
        <div>
            {/* reload na ho uss kae liye ye a tag ki jaghe banao Link tag */}
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}

{/* abb reloading nahi hogi */}
          <Link to ='/'>Home</Link>
          <Link to ='/about' >About</Link>
          <Link to ='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar