import React, { useRef } from 'react';
import './contact.css';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import facebook from '../../Assets/facebook.png';
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
                        <a href="https://www.instagram.com/ruchir_malik/" target="_blank"> <img src={instagram} alt="Insta_Logo" className="linkImg" /> </a>
                        <a href="https://www.facebook.com/ruchir.malik" target="_blank"> <img src={facebook} alt="FB_Logo" className="linkImg" /> </a>
                        <a href="https://www.linkedin.com/in/ruchirmalik/" target="_blank"> <img src={linkedin} alt="Linkedin_Logo" className="linkImg" /> </a>
                        <a href="https://github.com/ruchirmalik" target="_blank"> <img src={github} alt="Github_Logo" className="linkImg" /> </a>

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

            </div>


        </section>
    )
}

export default Contact;