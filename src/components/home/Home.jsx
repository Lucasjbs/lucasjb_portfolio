import React from 'react'
import './home.css'

import CV from '../../assets/cv_lucas_junqueira_bastos_v5.pdf'
import ProfilePic from '../../assets/Profile1.jpg'

function Home() {
  return (
    <header id='home'>
      <div className="header-container">
        <h4>Hello, my name is</h4>
        <h1>Lucas Junqueira Bastos</h1>
        <h4 className='text-light'>Programmer - Fullstack Web Developer</h4>

        <div className='home-buttons'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Talk to me</a>
        </div>
      </div>

      <div className="profile-pic">
        <img src={ProfilePic} alt='profile-pic' style={{width: '100%', height: '100%'}}></img>
      </div>
    </header>
  )
}

export default Home