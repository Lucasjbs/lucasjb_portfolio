import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Works from '../components/works/Works'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default Main