import React from 'react'
import './about.css'

import AboutPic from '../../assets/Profile2.jpg'

function About() {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="about-pic">
        <img src={AboutPic} alt='about-pic' className='about-img'></img>
      </div>

      <div className='about-container'>
        <article>
          <p>
            My name is Lucas Junqueira, I'm 25 years old and I'm currently finishing my graduation in 
            computer engineering. During that time, I got used to learn new technologies on my own, and now
            I have basic knowledge about Web Development using React, Node, PostgreSQL, Git and other technologies.
          </p>
          <p>
            I'm currently looking for an internship in Web Development and an opportunity to put everything I worked
            so hard to learn into practice, learn a lot more about the real work experience, and be productive for the 
            team.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About