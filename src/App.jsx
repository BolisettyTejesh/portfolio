import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './App.css'

// Import Components
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [cursorHover, setCursorHover] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Custom cursor logic
  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    
    const onMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || e.target.closest('button')) {
        setCursorHover(true)
      } else {
        setCursorHover(false)
      }
    }
    
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor desktop-only ${cursorHover ? 'hover' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Navbar */}
      <div className={scrolled ? "scrolled" : ""}>
        <nav>
          <div className="nav-container">
            <div className="nav-logo text-gradient">Tejesh.</div>
            
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#cp" className="nav-link" onClick={() => setIsMenuOpen(false)}>Profile</a>
              <a href="#timeline" className="nav-link" onClick={() => setIsMenuOpen(false)}>Achievements</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>

            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
