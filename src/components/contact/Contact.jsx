import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'
import './contact.css'

function Contact() {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      
      <div className='contact-card-layout'>
        <div className='contact-card'>
          <a href='https://www.linkedin.com/in/lucas-junqueira-bastos-85b89b203/' target="_blank" rel="noreferrer" ><BsLinkedin /></a>
          <p>LinkedIn</p>
          <h6>lucas-junqueira-bastos-85b89b203</h6>
        </div>
        <div className='contact-card'>
          <a href='https://mail.google.com/mail/' target="_blank" rel="noreferrer" ><CgMail /></a>
          <p>Email</p>
          <h6>lucasjbastos26@gmail.com</h6>
        </div>
        <div className='contact-card'>
          <a href='https://github.com/Lucasjbs' target="_blank" rel="noreferrer" ><BsGithub /></a>
          <p>GitHub</p>
          <h6>Lucasjbs</h6>
        </div>
      </div>

      <div className='contact-container'>
        <h4>Direct Form:</h4>
        <form>
          <input type='text' placeholder='Your Name'></input>
          <input type='text' placeholder='Your Email'></input>
          <textarea placeholder='Message' rows={16}></textarea>
          <button className='btn'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact