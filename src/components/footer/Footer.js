import React, { useRef, useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const contactData = useRef()
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")
    // 
    const sendToEmail = (e) => {
        e.preventDefault()
        // 
        emailjs.sendForm('service_4zusb9b', 'template_yby2xfm', e.target, 'LOdxy6ZOXWp_-5Olj')
        .then((result) => {
            setSuccess("Thanks for write to me!")
            // console.log(result.text);
        }, (error) => {
            setError(error.text)
            // console.log(error.text);
        });
    }
        // recv the url and replace the current url which social media wants to check
        function visitSocialAcc(url) {
            // console.log(url)
            window.location.replace(`${url}`)
        }
    return (
        <div className='footer-area' id="contact">
            <div className="footer_heading">Get in touch_</div>
            <div className="foo">
            <form className="contact-form" ref={contactData} onSubmit={sendToEmail}>
                <input type="text" id="name" name="name" placeholder="Your name" />
                <input type="email" id="email" name="email" placeholder="Your email" />
                <textarea id="message" name="message" placeholder="Write something.." style={{height: '100px'}} />
                <input type="submit" value="Submit" />
                <br />{ success ? <span style={{color: '#fff'}}>{success}</span> : <span>{error}</span>}
            </form>
            <div className="contact-info">
            <dl>
                <dt>PHONE:</dt>
                <dd>+88 018 7518 7195</dd>
            </dl>
            <dl>
                <dt>SKYPE:</dt>
                <dd>kader79</dd>
            </dl>
            <dl>
                <dt>EMAIL:</dt>
                <dd>kaderabdul7980@gmail.com</dd>
            </dl>
            <dl>
                <dt>ADDRESS:</dt>
                <dd>Ka-93-D, Kuratoli,Kuril Bishwa Road.</dd>
            </dl>
            </div>
            <div className="contact-media">
            <dl>
                <Link onClick={() => visitSocialAcc('https://github.com/kaderabdul79')} to="">
                <dt><FaGithub /></dt>
                <dd>Github</dd>
                </Link>
            </dl>
            <dl>
                <Link onClick={() => visitSocialAcc('https://www.linkedin.com/in/kader-abdul/')} to="">
                <dt><FaLinkedinIn /></dt>
                <dd>Linkedin</dd>
                </Link>
            </dl>
            <dl>
                <Link onClick={() => visitSocialAcc('https://www.facebook.com/kaderabdulakd/')} to="">
                <dt><FaFacebookF /></dt>
                <dd>Facebook</dd>
                </Link>
            </dl>

            </div>
            </div>
            <footer>&copy; {(new Date().getFullYear())} Abdul Kader. All Rights Reserved</footer>
        </div>
    );
};

export default Footer;