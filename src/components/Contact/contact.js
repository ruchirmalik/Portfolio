import React, { useRef, useState } from 'react';
import './contact.css';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';
import facebook from '../../Assets/facebook.png';
import instagram from '../../Assets/instagram.png';
import github from '../../Assets/GitHub.png';
import linkedin from '../../Assets/linkedin.png';

const Contact = () => {
    const form = useRef()
    const [sent, setSent] = useState(false)
    // const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    // const [message, setMessage] = useState("")
    // const [subject, setSubject] = useState("")
    // const [emailError, setEmailError] = useState("")
    // const [nameError, setNameError] = useState("")
    // const [subjectError, setSubjectError] = useState("")
    // const [messageError, setMessageError] = useState("")
    const [emailSendError, setEmailSendError] = useState("")

    const isValidEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // setNameError("")
        // setEmailError("")
        // setMessageError("")
        // setSubjectError("")

        // if (!name) {
        //     setNameError("Please enter a valid name")
        //     return;
        // }

        // if (!email || !isValidEmail(email)) {
        //     setEmailError("Please enter a valid email")
        //     return;
        // }


        // if (!subject) {
        //     setSubjectError("Please enter a valid subject")
        //     return;
        // }

        // if (!message) {
        //     setMessageError("Please enter a valid message")
        //     return;
        // }

        emailjs.sendForm('service_cp2kptb', 'template_3yqdatf', form.current, '2fRjLe2mdyV0pxCrR')
            .then((result) => {
                console.log(result.text);
                setSent(true);
            }, (error) => {
                console.log(error.text);
                setEmailSendError(`Couldn't send your email due to some error! Try again later :( ${error.text}`)
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
                </div>
                <div className="rightHalf">
                    {sent ? <h2>Thanks for reaching out! I'll get back to you soon</h2> :
                        emailSendError ? <h2>{emailSendError}</h2> :
                            <>
                                <div className="contactMeDesc">I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.  </div> <br />
                                <form action="" ref={form} onSubmit={sendEmail}>
                                    <input type="text" className="name" placeholder='Your Name' name='your_name' required />
                                    {/* {nameError && <p>{nameError}</p>} */}
                                    <input type="email" className="email" placeholder='Your Email' name='your_email' required />
                                    {/* {emailError && <p>{emailError}</p>} */}
                                    <input type="text" className="subject" placeholder='Subject' name='your_subject' required />
                                    {/* {subjectError && <p>{subjectError}</p>} */}
                                    <textarea className='msg' name="message" rows="5" placeholder='Your Message' required ></textarea>
                                    {/* {messageError && <p>{messageError}</p>} */}
                                    <button className="submitBtn" type="submit">Submit</button>
                                </form>
                            </>
                    }
                </div>

            </div>




        </section >
    )
}

export default Contact;