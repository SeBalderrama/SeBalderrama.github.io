import { useState, useEffect } from 'react'
import './App.css'
import Beams from './components/Beams'
import Silk from './components/Silk'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [backgroundType, setBackgroundType] = useState<'beams' | 'silk'>('beams')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const teachingServices = [
    {
      title: 'Conversational English',
      description: 'Improve your speaking confidence through natural conversations about daily life, culture, and interests.',
      features: ['Daily conversation practice', 'Pronunciation improvement', 'Cultural exchange', 'Real-world vocabulary'],
      rate: '$25/hour',
      format: 'Online/In-person'
    },
    {
      title: 'Business English',
      description: 'Master professional English for meetings, presentations, emails, and workplace communication.',
      features: ['Business vocabulary', 'Presentation skills', 'Email writing', 'Meeting participation'],
      rate: '$30/hour',
      format: 'Online/In-person'
    },
    {
      title: 'Exam Preparation',
      description: 'Targeted preparation for IELTS, TOEFL, Cambridge exams, and other English proficiency tests.',
      features: ['Test strategies', 'Practice exams', 'Score improvement', 'Time management'],
      rate: '$35/hour',
      format: 'Online'
    },
    {
      title: 'Kids\' English',
      description: 'Fun and engaging English lessons for children aged 6-12 using games, songs, and interactive activities.',
      features: ['Interactive games', 'Storytelling', 'Basic grammar', 'Vocabulary building'],
      rate: '$20/hour',
      format: 'Online/In-person'
    }
  ]

  const credentials = [
    { name: 'CELTA Certificate', institution: 'Cambridge University', year: '2022' },
    { name: 'TEFL Certification', institution: 'International TEFL Academy', year: '2021' },
    { name: 'Bachelor of Education', institution: 'University of Toronto', year: '2020' },
    { name: 'TESOL Advanced', institution: 'Trinity College London', year: '2023' }
  ]

  const languages = [
    { language: 'English', level: 'Native' },
    { language: 'Spanish', level: 'Fluent' },
    { language: 'French', level: 'Intermediate' },
    { language: 'Mandarin', level: 'Basic' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      console.log('Submitting form data:', formData)
      
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      const data = await response.json()
      console.log('Response data:', data)

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        })
        setFormData({ name: '', email: '', service: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setSubmitStatus({
        type: 'error',
        message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Background Effect - Switchable between Beams and Silk */}
      <div className="background-beams">
        {backgroundType === 'beams' ? (
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        ) : (
          <Silk
            speed={5}
            scale={1}
            color="#dd9ded"
            noiseIntensity={1.5}
            rotation={0}
          />
        )}
      </div>

      {/* Navigation - Outside the app container to avoid stacking context issues */}
      <nav className="navbar" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '70px',
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Maria Luisa</span>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
            <li>
              <button 
                onClick={() => setBackgroundType(backgroundType === 'beams' ? 'silk' : 'beams')}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                {backgroundType === 'beams' ? '🌊 Silk' : '✨ Beams'}
              </button>
            </li>
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
              <h1 className="hero-name">Maria Luisa</h1>
            </div>
            <h2 className="hero-subtitle">ESL Teacher & Language Coach</h2>
            <p className="hero-description">
              Helping students from around the world master English through personalized, 
              engaging lessons. From beginners to advanced learners, I create a supportive 
              environment where confidence grows and fluency develops naturally.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Book a Free Trial</button>
              <button className="btn btn-secondary">View My Resume</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>👩‍🏫</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Available for lessons</h3>
                <p>Flexible scheduling • All levels welcome</p>
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
                Hello! I'm Sarah, a passionate ESL teacher with over 5 years of experience 
                helping students from diverse backgrounds achieve their English language goals. 
                My journey in education began when I discovered my love for connecting with 
                people from different cultures through language.
              </p>
              <p>
                I believe that learning a language should be both effective and enjoyable. 
                My teaching philosophy centers around creating a supportive, interactive 
                environment where students feel confident to practice and make mistakes. 
                Every lesson is tailored to individual needs, learning styles, and goals.
              </p>
              <p>
                When I'm not teaching, you'll find me reading books from around the world, 
                practicing yoga, or exploring new cuisines. I love learning about different 
                cultures and sharing stories with my students.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years Teaching</p>
                </div>
                <div className="stat">
                  <h3>200+</h3>
                  <p>Students Taught</p>
                </div>
                <div className="stat">
                  <h3>4</h3>
                  <p>Languages</p>
                </div>
              </div>

              <div className="credentials-section">
                <h3>Education & Certifications</h3>
                <div className="credentials-grid">
                  {credentials.map((credential, index) => (
                    <div key={index} className="credential-card">
                      <h4>{credential.name}</h4>
                      <p>{credential.institution}</p>
                      <span className="year">{credential.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="languages-section">
                <h3>Languages I Speak</h3>
                <div className="languages-grid">
                  {languages.map((lang, index) => (
                    <div key={index} className="language-card">
                      <h4>{lang.language}</h4>
                      <span className="level">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="resume-download">
                <a href="/resume.pdf" className="btn btn-secondary" download>
                  📄 Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Teaching Services</h2>
          <div className="services-intro">
            <p>
              I offer personalized English lessons designed to meet your specific goals. 
              Whether you're preparing for an exam, improving your business English, 
              or just want to feel more confident speaking, I'm here to help!
            </p>
          </div>
          <div className="services-grid">
            {teachingServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <h3>{service.title}</h3>
                  <div className="service-rate">
                    <span className="rate">{service.rate}</span>
                    <span className="format">{service.format}</span>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>What's included:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary">Book This Service</button>
              </div>
            ))}
          </div>
          
          <div className="services-cta">
            <h3>Ready to start your English journey?</h3>
            <p>Book a free 30-minute trial lesson to see if we're a good fit!</p>
            <button className="btn btn-primary">Contact Me for a Free Trial</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's start learning together!</h3>
              <p>
                I'm excited to help you achieve your English language goals. 
                Whether you have questions about my teaching methods or want to 
                schedule your first lesson, feel free to reach out!
              </p>
              <div className="contact-links">
                <a href="mailto:sarah.johnson@eslteacher.com" className="contact-link">
                  📧 sarah.johnson@eslteacher.com
                </a>
                <a href="https://linkedin.com/in/sarahjohnson-esl" className="contact-link">
                  💼 linkedin.com/in/sarahjohnson-esl
                </a>
                <a href="https://instagram.com/sarahjohnson_esl" className="contact-link">
                  📸 instagram.com/sarahjohnson_esl
                </a>
              </div>
              <div className="availability">
                <h4>My Availability:</h4>
                <p>Monday - Friday: 9 AM - 8 PM (EST)</p>
                <p>Saturday: 10 AM - 6 PM (EST)</p>
                <p>Sunday: Available for special requests</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus.type && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="conversational">Conversational English</option>
                  <option value="business">Business English</option>
                  <option value="exam">Exam Preparation</option>
                  <option value="kids">Kids' English</option>
                </select>
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Tell me about your English learning goals and experience level..." 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Maria Luisa ESL. All rights reserved.</p>
        </div>
      </footer>
        </div>
      </div>
    </>
  )
}

export default App
