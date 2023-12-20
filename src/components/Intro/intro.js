import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import hireMeImg from '../../Assets/hireMe.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I'm <span className="introName">Ruchir </span> <br/> a new grad Software Engineer. </span>
        <p className="introPara"> I turn coffee into code and ideas into innovation. </p>
        <Link><button className="btn"><img src={hireMeImg} alt="" className="btnImg"/>Hire Me</button></Link>
      </div>
      
    </section>
  )
}

export default Intro;