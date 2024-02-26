import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="This is the company logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>VR Application</li>
            <li>Hazard Perception</li>
            <li>Blog</li>
            <li>
                <button className='btn'>Contact us</button>
            </li>
        </ul>
    </nav>
  )
}