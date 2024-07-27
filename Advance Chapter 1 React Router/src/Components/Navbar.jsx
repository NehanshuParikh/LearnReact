import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Nav.css'
const Navbar = () => {
  return (
    <>
    
    <NavLink exact end to={'/'} className={({ isActive })=>(isActive ? 'active': '')}>Home</NavLink>
    <NavLink to={'/about'}  className={({ isActive })=>(isActive ? 'active': '')}>About</NavLink>
    <NavLink to={'/contact'}  className={({ isActive })=>(isActive ? 'active': '')}>Contact</NavLink>


    </>
  )
}

export default Navbar