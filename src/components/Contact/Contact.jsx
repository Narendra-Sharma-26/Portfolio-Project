import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {themContext} from '../../Context'
import { useContext } from 'react'

const Contact = () => {

  const theme = useContext(themContext)
    const darkMode = theme.state.darkMode;

        const form = useRef();

        const [Done, setDone] = useState(false)
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_arexo7t', 'template_ge3ifab', form.current, {
              publicKey: '0SAuFpxqZAivoXhTh',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                setDone(true)
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };
      

  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>

                </div>
            </div>
        </div>


        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{Done && "Thanks for Contacting me!"}</span>
                <div className="blur c-blur1" style={{background: "var(--purple )"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact