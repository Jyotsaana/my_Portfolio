// import React from 'react'
// import './hero.css'
// import myPhoto from '../../assets/photo.jpg'
// import resume from '../../assets/resume.pdf'

// function Hero() {
//   return (
//     <section id="home" className="hero">

//       <div className="hero-text">
//         <p className="hero-greeting">Hey there, I'm</p>
//         <h1 className="hero-name">Jyotsana</h1>
//         <h2 className="hero-role">Full Stack Developer</h2>
//         <p className="hero-bio">
//           I build fast, scalable, and beautiful web applications
//           from frontend to backend. Passionate about clean code
//           and great user experiences.
//         </p>
//         <div className="hero-buttons">
//           <a href="#project" className="btn-primary">View Projects</a>
//           <a href={resume} download="resume.pdf" className="btn-secondary">Download Resume</a>
//         </div>
//       </div>

//       <div className="hero-image">
//         <img src={myPhoto} alt="My Photo" />
//       </div>

//     </section>
//   )
// }

// export default Hero




import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import myPhoto from '../../assets/photo.jpg'
import Skills from "./skills"

function About() {
  return (
    <section id="about" className="about">

      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={myPhoto} alt="About Me" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Hi, I'm <span className="highlight">Jyotsana</span></h3>
          <p>
            I'm a passionate Full Stack Developer who loves building
            real-world web applications. I enjoy working on both
            frontend and backend, turning ideas into fully functional products.
          </p>
          <p>
            I'm currently pursuing my degree and constantly learning
            new technologies to sharpen my skills. I love solving
            problems and writing clean, efficient code.
          </p>
        </motion.div>

      </div>

      <Skills />

    </section>
  )
}

export default About