import React from 'react'
import './project.css'

function Project() {

  const projects = [
    {
      title: "My Portfolio",
      description: "A personal portfolio website built with React showcasing my skills.",
      techStack: ["React", "CSS","JavaScript"],
      github:"https://github.com/Jyotsaana/my_Portfolio",
      img:"vecteezy_3d-illustration-graphic-design_13473643.png",
    },
    {
      title: "ML Road Accident Prediction",
      description: "Predicts road accident severity using ML.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/Jyotsaana/ml-project-traffic",
      img:"Screenshot 2026-04-30 194911.png",
    },
    {
      title: "Spotify Clone",
      description: "Music streaming web app with custom player.",
      techStack: ["React", "CSS", "JavaScript", "Spotify API"],
      github: "https://github.com/Jyotsaana/spotify-clone",
      img:"Screenshot 2026-04-30 195522.png",
    }
  ]

  return (
    <div id="project">
      <h2 className='project-title'>My Projects</h2>
      <p>Projects I have built are:</p>

      <div className='project-box' >
        {projects.map((project, index) => (
          <div className="project-card"key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><b>Tech:</b> {project.techStack.join(", ")}</p>
            <p><a href={project.github} >Github link</a></p>
            {project.img && <img className="img" src={project.img} alt={project.title} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project