import React, {useState} from 'react'
import './navbar.css'

function Navbar() {
  const [activeTab, setActiveTab] = useState('#home')
  return (
    <nav>
      <label htmlFor='drop-action'>
        <span className='drop-menu'>Menu &#8595;</span>
      </label>
      <input type='checkbox' id='drop-action'></input>
      
      <ul className='horizontal'>
        <li><a 
        href="#home"
        onClick={() => setActiveTab('#home')}
        className={activeTab === '#' ? 'active' : ''}
        >Home</a></li>

        <li><a 
        href="#about"
        onClick={() => setActiveTab('#about')}
        className={activeTab === '#about' ? 'active' : ''}
        >About Me</a></li>

        <li><a 
        href="#works"
        onClick={() => setActiveTab('#works')}
        className={activeTab === '#works' ? 'active' : ''}
        >Works & Projects</a></li>

        <li><a 
        href="#contact"
        onClick={() => setActiveTab('#contact')}
        className={activeTab === '#contact' ? 'active' : ''}
        >Contact Me</a></li>
      </ul>
    </nav>
  )
}

export default Navbar