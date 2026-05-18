import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import './Hero.css';

const Typewriter = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      }
    } else {
      if (currentText === strings[currentStringIndex]) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(strings[currentStringIndex].slice(0, currentText.length + 1));
        }, 100);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const titles = [
    "AI & Full Stack Developer",
    "Problem Solver",
    "Competitive Programmer"
  ];

  return (
    <section id="home" className="hero-section section-padding">
      <div className="hero-content animate-fade-in">
        <div className="status-badge glass">
          <span className="status-dot"></span> Available for Opportunities
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <br />
          <span className="text-gradient">Bolisetty Naga Venkata Tejesh</span>
        </h1>
        
        <h2 className="hero-subtitle">
          I am a <Typewriter strings={titles} />
        </h2>
        
        <p className="hero-description text-secondary">
          Building intelligent systems, scalable web applications, and solving complex problems with modern technologies.
        </p>
        
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/resume.pdf" download="Bolisetty_Tejesh_Resume.pdf" className="btn-secondary">Download Resume</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/bolisettynagavenkatatejesh9/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href="https://github.com/BolisettyTejesh" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github />
          </a>
          <a href="https://leetcode.com/u/klu2300030088/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
            <Terminal /> {/* Using Terminal for LeetCode/CP platforms */}
          </a>
          <a href="mailto:2300030088cse3@gmail.com" className="social-icon" aria-label="Email">
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
