import { useState, useEffect } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import Particles from './components/Particles'
import SkillsSection from './components/SkillsSection'
import { ImagesSlider } from "./components/ui/images-slider";
import { motion } from "motion/react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

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

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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
          particleCount={300}
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
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        zIndex: '99999',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/mlogo.png" alt="Logo" className="nav-logo-img" />
            <span className="logo-text">SeBalderrama</span>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
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
                <div className="hero-title-container" style={{display:'grid'}}>
                  <img src="/mlogo.png" alt="Logo" className="hero-logo" />
                  <h1 className="hero-name">Sebastian</h1>
                  <h1 className="hero-name">Balderrama</h1>
                </div>
                <h2 className="hero-subtitle">Full-Stack Software Developer</h2>
                <p 
                  className="hero-description" 
                  onClick={toggleDescription}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  James 1:2-8
                </p>

                {/* Revealed Content */}
                {isExpanded && (
                  <blockquote className="hero-description">
                    Consider it pure joy, my brothers and sisters,<br></br>
                    whenever you face trials of many kinds, because you<br></br>
                    know that the testing of your faith produces<br></br>
                    perseverance. Let perseverance finish its work so that<br></br>
                    you may be mature and complete, not lacking anything.<br></br>
                    If any of you lacks wisdom, you should ask God, who<br></br>
                    gives generously to all without finding fault, and it will<br></br>
                    be given to you. But when you ask, you must believe<br></br>
                    and not doubt, because the one who doubts is like a<br></br>
                    wave of the sea, blown and tossed by the wind. That<br></br>
                    person should not expect to receive anything from the<br></br>
                    Lord. Such a person is double-minded and unstable in<br></br>
                    all they do.<br></br>
                  </blockquote>
                )}
                <div className="hero-buttons">
                  <a href="https://github.com/sebalderrama" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/sebalderrama" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    LinkedIn
                  </a>
                  {/*
                  <a className="btn btn-secondary">
                    Resume
                  </a>*/}
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
              <a className = 'scroll-arrow' href="#about" onClick={() => setIsMobileMenuOpen(false)}/>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="about">
            <div className="container-2">
            <ImagesSlider className="h-[40rem]" images={images}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
              >
              </motion.div>
            </ImagesSlider>
              
              <div className="about-content">
              <h2 className="section-title">About Me</h2>
                <div className="about-text">
                  <p>
                    I'm Sebastian Balderrama, a software dev in Waterloo. I have an Honours BSc in <strong>Computer Science & Mathematics</strong> at Wilfrid Lauirer University.
                  </p>
                  <p>
                    I enjoy building systems end-to-end, with a strong focus on backend development, data-driven applications, and AI-powered systems. 
                    My experience spans backend services and databases using Python, Java, Node.js, and SQL, as well as full-stack development with React and modern JavaScript frameworks. 
                    I've worked on projects involving cloud deployment, containerization, machine learning, computer vision, and speech models, and I enjoy diving into complex systems to understand how all the pieces fit together.
                  </p>
                  <p>
                    Outside of coursework and professional work, I'm active in the hackathon scene, recently placing <strong>2nd at SpurHacks and reaching the finals at Hack Canada.</strong> 
                    I love collaborative environments and cool people!
                  </p>
                  <p>
                    Currently: Playing with Sesame's CSM.
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
