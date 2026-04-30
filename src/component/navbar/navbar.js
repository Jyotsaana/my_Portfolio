import React from 'react'
import './navbar.css'
// import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.png'
import resume from '../../assets/resume.pdf'

function Navbar() {
  return (
    <nav className="navbar">

      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <div className="name">
        <h2>Jyotsana Portfolio</h2>
      </div>

      <div className="desktopmenu">
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#project'>Projects</a>
        <a href={resume} >Resume</a>
        <a href='#contact'>Contact</a>
        <a href='#contact'>Message me</a>

      </div>

      {/* <button type="button" className="desktopmenubtn">
        <img className="menu" src={menuIcon} alt="Menu" />
        Contact Me
      </button> */}

    </nav>
  )
}

export default Navbar