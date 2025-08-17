import { useState, useEffect } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import Particles from './components/Particles'
import SkillsSection from './components/SkillsSection'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      title: 'FitQuest',
      description: 'An AI-powered fitness game that makes workouts fun, blending: AI Coach, Nutritionist AI, Real-Time Form Analysis, and RPG Progression.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Railway', 'Express','Gemini'],
      githubLink: 'https://github.com/AhmadYahya-05/AlgorithmAthletes',
      liveDemo: 'https://devpost.com/software/fitness-quest-31h2ci',
      image: 'fitquest1thumb.png',
      hackathon: 'SpurHacks 2025 2nd Place'
    },
    {
      title: 'Canify',
      description: 'A Google Chrome extension that analyzes the items in your Amazon cart, assessing them based on whether they are Canadian-made, ethically sourced, and provide good value for money.',
      techStack: ['JavaScript', 'Tailwind CSS', 'Flask', 'Rust', 'NEAR Shade Agents', 'Gemini'],
      githubLink: 'https://github.com/MBA380/Canify',
      liveDemo: 'https://dorahacks.io/buidl/23018/',
      image: 'maple.png',
      hackathon: 'Hack Canada 2025 Finalist'
    },
    {
      title: 'Simulating RCV',
      description: 'Exploring the potential outcomes of implementing ranked choice voting (RCV) systems: Instant Runoff Voting (IRV), Borda Count, and Defeat-Dropping Condorcet (DDC) in the 2021 Canadian federal election through Monte Carlo simulations.',
      techStack: ['Monte Carlo Simulations', 'Pandas', 'Numpy'],
      //githubLink: 'https://github.com/sebalderrama/weather-dashboard',
      //liveDemo: 'https://weather.sebalderrama.dev',
      image: 'simrcv.png'
      // No hackathon property = no label
    }
  ]





  return (
    <>
      {/* Particles Background - Outside app container */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <Particles 
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={['#ffffff', '#ffffff']}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Navigation */}
      <nav className="navbar" style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        right: '20px',
        width: 'calc(100vw - 40px)',
        height: '70px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        zIndex: 99999,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/mlogo.png" alt="Logo" className="nav-logo-img" />
            <span className="logo-text">SeBalderrama</span>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>

          </ul>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`app ${isLoaded ? 'loaded' : ''}`}>
        {/* Main Content Container */}
        <div className="main-content">

          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-title-container">
                  <img src="/mlogo.png" alt="Logo" className="hero-logo" />
                  <h1 className="hero-name">Sebastian Balderrama</h1>
                </div>
                <h2 className="hero-subtitle">Full-Stack Software Developer</h2>
                <p className="hero-description">
                  Keep. Moving. Forward.
                </p>
                <div className="hero-buttons">
                  <a href="https://github.com/sebalderrama" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/sebalderrama" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    LinkedIn
                  </a>
                  <a className="btn btn-secondary">
                    Resume
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <ProfileCard
                  avatarUrl="cleanga1.png"
                  name="Sebastian Balderrama"
                  title="Full-Stack Software Developer"
                  handle="sebalderrama"
                  status="Online"
                  contactText="Contact"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={true}
                  onContactClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
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
                    I'm Sebastian Balderrama, a software dev in Waterloo. I have an Honours BSc in <strong>Computer Science & Mathematics</strong> at Wilfrid Lauirer University.
                  </p>
                  <p>
                    I specialize in backend development and database systems using technologies like Python, Java, and Node.js. 
                    I also have experience in frontend development with modern JavaScript frameworks including React, Vue.js, and Next.js, 
                    along with proficiency in TypeScript and responsive design principles.
                    Aside from development, I love attending hackathons! I've been to 2 so far, and I'm looking forward to many more.
                  </p>
                  <p>
                    In my free time, I'm probably outside or working on side projects. Currently, into mobile game dev 👀 and AI.
                  </p>
                </div>
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
                      <img src={project.image} alt={project.title} className="project-thumbnail" />
                    </div>
                    <div className="project-content">
                      <div className="project-title-row">
                        <h3>{project.title}</h3>
                        {project.hackathon && (
                          <div className="hackathon-tag">{project.hackathon}</div>
                        )}
                      </div>
                      <p>{project.description}</p>
                      <div className="project-tech">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                          GitHub
                        </a>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                          More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <SkillsSection />



          {/* Contact Section */}
          <section id="contact" className="contact">
            <div className="container">
              <h2 className="section-title">Get In Touch</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Let's work together!</h3>
                  <p>
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                  <div className="contact-links">
                    <a href="mailto:sebastian.balderr@gmail.com" className="contact-link">
                      📧 sebastian.balderr@gmail.com
                    </a>
                    <a href="https://github.com/sebalderrama" target="_blank" rel="noopener noreferrer" className="contact-link">
                      🐙 github.com/sebalderrama
                    </a>
                    <a href="https://linkedin.com/in/sebalderrama" target="_blank" rel="noopener noreferrer" className="contact-link">
                      💼 linkedin.com/in/sebalderrama
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <p>&copy; 2024 Sebastian Balderrama. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
