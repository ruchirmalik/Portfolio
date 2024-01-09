import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import hireMeImg from '../../Assets/hireMe.png';
import Typewriter from 'typewriter-effect';
import ruchirImg from '../../Assets/introImage.png';
import me from '../../Assets/me.png';
import location from '../../Assets/location.png';


const Intro = () => {

  return (
    <section id="intro">
      <div className="introPage">
        <div className="introLeft">
          <img src={ruchirImg} alt="RuchirMalik" className="introImage" />
        </div>
        <div className="introContent">
          <span className="hello">Hello 👋 </span>
          <span className="introText"> My name is <span className="introName">Ruchir Malik, </span>
            <Typewriter options={{ wrapperClassName: 'typewriter' }} onInit={(typewriter) => {
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
          <p className="introPara">
            I turn coffee into code and ideas into innovation
            {/* <Typewriter onInit={(typewriter) => {
              typewriter.typeString(' I turn coffee into code and ideas into innovation...')
              .callFunction(() => {
              console.log('String typed out!');
              })
              
              
              .callFunction(() => {
              console.log('All strings were deleted');
              })
              .start();
            }} />  */}
          </p>
          {/* <Link><button className="btn"><img src={me} alt="" className="btnImg" />Learn More About Me</button></Link> */}

          <div className="location">
            <img src={location} alt="" className="locationImg" />
            <p>Vancouver, Canada </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro;