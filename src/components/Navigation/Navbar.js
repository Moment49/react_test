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
                <div className='nav-menu-left'>
                    <ul>
                        <li><Link className='item' to='/'>Home</Link></li>
                        <li><Link className='item'  to='/about'>About</Link></li>
                        <li><Link className='item'  to='/Products'>Products</Link></li>
                        <li><Link className='item'  to='/'>Community</Link></li>
                        <li><Link className='item' to='/contact'>Contact</Link></li>
                    </ul>
                </div>
               
                <a className='btn'>Get in Touch</a>
                
               
                    
                
        </div> 
    </div>
  )
}

export default Navbar
