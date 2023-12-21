import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import hireMeImg from '../../Assets/hireMe.png';
import Typewriter from 'typewriter-effect';

//<Typewriter options={{strings: ['Front-End Developer', 'Full-Stack Software Engineer'], autoStart: true, loop: true, }}/>
{/* <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteChars(0)
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/> */}


const Intro = () => {
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
      
    </section>
  )
}

export default Intro;