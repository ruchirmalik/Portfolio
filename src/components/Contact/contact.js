import React, { useRef } from 'react';
import './contact.css';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import facebook from '../../Assets/Facebook.png';
import instagram from '../../Assets/instagram.png';
import github from '../../Assets/GitHub.png';
import linkedin from '../../Assets/linkedin.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cp2kptb', 'template_3yqdatf', form.current, '2fRjLe2mdyV0pxCrR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <span className="contactPageTitle">Contact Me</span>
            <div className='leftright'>
                <div className="leftHalf">
                    <div className="contactLinksText">Let's connect. Say hi!</div>
                    <div className="contactLinks">
                        <Link className="instagram"> <img src={instagram} alt="Insta_Logo" className="linkImg" /> </Link>
                        <Link className="facebook"> <img src={facebook} alt="FB_Logo" className="linkImg" /> </Link>
                        <Link className="linkedin"> <img src={linkedin} alt="Linkedin_Logo" className="linkImg" /> </Link>
                        <Link className="github"> <img src={github} alt="Github_Logo" className="linkImg" /> </Link>
                    </div>
                </div>

                <div className="rightHalf">
                    <div className="contactMeDesc">I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.  </div> <br />
                    <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder='Your Name' name='your_name' />
                        <input type="email" className="email" placeholder='Your Email' name='your_email' />
                        <input type="text" className="subject" placeholder='Subject' name='your_subject' />
                        <textarea className='msg' name="message" rows="5" placeholder='Your Message' ></textarea>
                        <button className="submitBtn" type='submit' value='Send'>Submit</button>
                    </form>

                </div>

            </div>



        </section>
    )
}

export default Contact;