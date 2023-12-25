import React from 'react';
import './contact.css';
import { Link } from 'react-scroll';

import facebook from '../../Assets/Facebook.png';
import instagram from '../../Assets/instagram.png'
import github from '../../Assets/GitHub.png';
import linkedin from '../../Assets/linkedin.png';

const Contact = () => {
  return (
    <section className="contactPage">
        <span className="contactPageTitle">Contact Me</span>
        <div className='leftright'>
            <div className="contactLinks">
                <Link className="instagram"> <img src={instagram} alt="Insta_Logo" className="linkImg" /> </Link>
                <Link className="linkedin"> <img src={facebook} alt="FB_Logo" className="linkImg" /> </Link>
                <Link className="linkedin"> <img src={linkedin} alt="Linkedin_Logo" className="linkImg" /> </Link>
                <Link className="github"> <img src={github} alt="Github_Logo" className="linkImg" /> </Link>
            </div>

            <div className="Form">
                <div className="contactMeDesc">I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.  </div> <br/>
                <form action="" className="contactForm">
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email' />
                    <input type="text" className="subject" placeholder='Subject' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button className="submitBtn" type='submit' value='Send'></button>
                </form>

            </div>

        </div>

        .

    </section>
  )
}

export default Contact;