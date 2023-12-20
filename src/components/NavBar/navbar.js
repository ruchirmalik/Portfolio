import React from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png';
import {Link} from 'react-scroll';
import hireMeImg from '../../Assets/ContactMe.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="websiteLogo" /> 
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            <Link className="desktopMenuListItem">Blogs</Link>
            <Link className="desktopMenuListItem">About Me</Link>
        </div>
        <button className="desktopMenuBtn"> <img src={hireMeImg} alt="" className="desktopMenuIcon" /> Hire Me </button>
    </nav>
  )
}

export default Navbar