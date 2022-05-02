import React from 'react'
import './Navbar.css'
import logo from '../images/logo.svg'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-container'>
            <div className='nav-logo'>
                <img src={logo} alt="logo"/>
            </div>
                <ul className='nav-menu'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className='btn'>
                    <a>Get in Touch</a>
                </div>
        </div> 
    </div>
  )
}

export default Navbar
