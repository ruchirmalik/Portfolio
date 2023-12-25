import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import hireMeImg from '../../Assets/hireMe.png';
import Typewriter from 'typewriter-effect';
//import useCustomCursor from '../../hooks/useCustomCursor'

const Intro = () => {
  // const cursorPosition = useCustomCursor();
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I'm <span className="introName">Ruchir </span> 
          <Typewriter onInit={(typewriter) => {
              typewriter.typeString('a new grad Front-End Developer')
              .callFunction(() => {
              console.log('String typed out!');
              })
              .pauseFor(1000)
              .deleteChars(19)
              .changeDeleteSpeed(10)
              typewriter.typeString('Full-Stack Software Engineer.')
              .callFunction(() => {
              console.log('String typed out!');
              })
              .callFunction(() => {
              console.log('All strings were deleted');
              })
              .start();
            }} /> 
        </span>
        <p className="introPara"> I turn coffee into code and ideas into innovation. </p>
        <Link><button className="btn"><img src={hireMeImg} alt="" className="btnImg"/>Hire Me</button></Link> 
      </div>
    
      {/* custom cursor styling */}
      {/* <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: '#ff3131',
        transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
      }}
    /> */}
    </section>
  )
}

export default Intro;