import React from 'react';
import './navbar.css';
import logo from '../../Assets/rm.png';
import {Link} from 'react-scroll';
import contactMeImg from '../../Assets/contactMe.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="websiteLogo" /> 
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            
            <Link className="desktopMenuListItem">About</Link>
        </div>
        <button className="desktopMenuBtn"> <img src={contactMeImg} alt="" className="desktopMenuIcon" /> Contact Me </button>
    </nav>
  )
}

export default Navbar