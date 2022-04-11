import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
      <h2>Lucas Junqueira Bastos</h2>
      <h5>lucasjbastos26@gmail.com</h5>

      <div className='footer-left-container'>
        <a href='https://www.linkedin.com/in/lucas-junqueira-bastos-85b89b203/' target="_blank" rel="noreferrer" >LinkedIn</a>
        <a href='https://mail.google.com/mail/' target="_blank" rel="noreferrer" >Email</a>
        <a href='https://github.com/Lucasjbs' target="_blank" rel="noreferrer" >GitHub</a>
      </div>
      <div className='footer-right-container'>
        <a href='https://github.com/Lucasjbs' target="_blank" rel="noreferrer" >CodeSandbox</a>
        <a href='https://github.com/Lucasjbs' target="_blank" rel="noreferrer" >RocketSeat</a>
        <a href='https://github.com/Lucasjbs' target="_blank" rel="noreferrer" >Discord</a>
      </div>
    </footer>
  )
}

export default Footer