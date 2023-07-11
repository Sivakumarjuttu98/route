import React from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
 const navlink =({isActive}) => {
       return {
        textDecoration: isActive? "none": "underline",
        fontWeight : isActive? 'bolder' :'normal'
       }
 }

  return (
    <div className='bg-container'>
        <nav>
        <NavLink style={navlink} to='/'>Home</NavLink>
        <NavLink style={navlink} to='/Contact'>Contact</NavLink>
        <NavLink style={navlink} to='/About'>About</NavLink>
        </nav>
    </div>
    
  )
}

export default Navbar