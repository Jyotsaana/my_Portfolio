import React from 'react'
import './hero.css'
import myPhoto from '../../assets/photo.jpg'
import resume from '../../assets/resume.pdf'

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">
        <p className="hero-greeting">Hey there, I'm</p>
        <h1 className="hero-name">Jyotsana</h1>
        <h2 className="hero-role">Full Stack Developer</h2>
        <p className="hero-bio">
          I build fast, scalable, and beautiful web applications
          from frontend to backend. Passionate about clean code
          and great user experiences.
        </p>
        <div className="hero-buttons">
          <a href="#project" className="btn-primary">View Projects</a>
          <a href={resume} download="resume.pdf" className="btn-secondary">Download Resume</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={myPhoto} alt="My Photo" />
      </div>

    </section>
  )
}

export default Hero