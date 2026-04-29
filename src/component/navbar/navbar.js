import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.png'

function Navbar() {
  return (
    <nav className="navbar">

      <img src={logo} alt="Logo" className="logo" />

      <div className="desktopmenu">
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#resume'>Resume</a>
      </div>

      <button type="button" className="desktopmenubtn">
        <img className="menu" src={menuIcon} alt="Menu" />
        Contact Me
      </button>

    </nav>
  )
}

export default Navbar