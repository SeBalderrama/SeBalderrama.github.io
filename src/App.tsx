import { useState, useEffect } from 'react'
import { TextHoverEffect } from './components/ui/text-hover-effect'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 }
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management with drag-and-drop interface',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop'
    }
  ]

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Portfolio</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-title-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextHoverEffect text="Sebastian" />
              <TextHoverEffect text="Balderrama" />
            </div>
            <h2 className="hero-subtitle">Full-Stack Developer</h2>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code and innovative solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View My Work</button>
              <button className="btn btn-secondary">Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Available for hire</h3>
                <p>Open to new opportunities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with 3+ years of experience building 
                web applications. I love turning complex problems into simple, beautiful solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>20+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <button className="btn btn-primary">View Project</button>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects.
                Feel free to reach out if you'd like to collaborate!
              </p>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">
                  📧 your.email@example.com
                </a>
                <a href="https://github.com/yourusername" className="contact-link">
                  🐙 github.com/yourusername
                </a>
                <a href="https://linkedin.com/in/yourusername" className="contact-link">
                  💼 linkedin.com/in/yourusername
                </a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
