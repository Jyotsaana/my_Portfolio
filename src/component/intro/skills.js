import React from 'react'
import { motion } from 'framer-motion'
import './skills.css'

const skills = [
  { name: "React", icon: "⚛️", level: "Advanced" },
  { name: "JavaScript", icon: "🟨", level: "Advanced" },
  { name: "Node.js", icon: "🟢", level: "Intermediate" },
  { name: "Python", icon: "🐍", level: "Intermediate" },
  { name: "MongoDB", icon: "🍃", level: "Intermediate" },
  { name: "CSS",  level: "Advanced" },
  { name: "HTML", level: "Advanced" },
  { name: "DSA",  level: "Intermediate" },
  { name: "Git",  level: "Intermediate" },
  { name: "CNN",  level: "Intermediate" },
  { name: "OS" , level: "Intermediate" },
  { name: "Framer" , level: "Beginner" },


]

// Parent container — controls stagger timing
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

// Each skill card animation
const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.4 }
  }
}

// Heading animation
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.6 }
  }
}

function Skills() {
  return (
    <section id="skills">

      <motion.h2
        className="skills-title"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="skills-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Technologies I work with
      </motion.p>

      {/* Parent container with stagger */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            variants={cardVariants}
            whileHover={{ scale: 1.08, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">{skill.level}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}

export default Skills
