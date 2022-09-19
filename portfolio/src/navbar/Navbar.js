import React from 'react'
import "./Navbar.css"
function Navbar() {      
  return ( 
    <div className='navbar'>
        <div>
            <p className='navbar-logo'>Dan</p>
        </div> 

        <div className='navbar-menu'>
            <p className='navbar-menu-items'>About</p>
            <p className='navbar-menu-items'>Experience</p>
             <p className='navbar-menu-items'>Work</p> 
             <p className='navbar-menu-items'>Contact</p> 
        </div>
        
    </div>
    
  )
} 

export default Navbar 
