import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/rm.png';
import { Link } from 'react-scroll';
import menu from '../../Assets/menu.png';

import contactMeImg from '../../Assets/contactMe.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="websiteLogo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-200} duration={1000} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-180} duration={1000} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-160} duration={1000} className="desktopMenuListItem">Projects</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contactPage')?.scrollIntoView({ behavior: 'smooth' }); //'?' is for optional chaining, prevents uncaught runtime error if the element is null
      }}>
        <img src={contactMeImg} alt="" className="desktopMenuIcon" /> Contact Me
      </button>

      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="mobileMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-200} duration={1000} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-180} duration={1000} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-160} duration={1000} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-160} duration={1000} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar