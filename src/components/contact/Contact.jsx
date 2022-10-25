import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_jrq11t9', 'template_im66por', form.current, '4NxMC0XtCJHzF4Dmm')
      
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Parlons-nous</h5>
      <h2> Contact </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4> Email</h4>
            <h5>jessy_drouin@protonmail.com</h5>
            <a href="mailto:jessy_drouin@protonmail.com" > Ecrire un message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4> Linkedin</h4>
            <h5>Jessy Drouin</h5>
            <a href="https://www.linkedin.com/messaging/thread/2-OTg4MTU1MDgtMGRiZC00OWI2LTgwNDMtMjY0ZmFiZDE5ODY4XzAxMg==/" target="_blank"> Ecrire un message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom complet' required />
          <input type="email" name='email' placeholder='Votre email' />
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='Envoyer' className='btn btn-primary'> Envoyer le message </button>


        </form>
      </div>
    </section>
  )
}

export default Contact
