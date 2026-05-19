import React from 'react';
import './FeaturedProject.css';
import { ExternalLink, Github, Mic } from 'lucide-react';

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="section-padding">
      <div className="section-header text-center animate-fade-in">
        <h2 className="section-title"><span className="text-gradient">Featured</span> Project</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="featured-card glass-card animate-fade-in">
        <div className="featured-image-container">
          <div className="image-placeholder">
            <Mic size={48} className="placeholder-icon" />
            <div className="placeholder-overlay"></div>
            {/* Replace this div with an actual <img> tag when you have a screenshot */}
            {/* <img src="/path-to-screenshot.png" alt="LinguaAI Preview" /> */}
          </div>
        </div>
        
        <div className="featured-content">
          <div className="featured-header">
            <h3 className="featured-title">LinguaAI – Real-Time Voice Translator</h3>
          </div>
          
          <p className="featured-description">
            Developed a premium Real-Time Voice Translator web application with live speech recognition, instant multilingual translation, text-to-speech playback, and conversation history using React, Vite, and Web Speech APIs.
          </p>
          
          <div className="featured-tech-stack">
            {["React", "Vite", "Vanilla CSS", "Web Speech API", "MyMemory API", "LocalStorage", "jsPDF", "Lucide React"].map((tech, index) => (
              <span className="tech-badge" key={index}>{tech}</span>
            ))}
          </div>
          
          <div className="featured-actions">
            <a href="https://voice-translator-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary featured-btn">
              <span>Live Demo</span>
              <ExternalLink size={18} />
            </a>
            <a href="https://github.com/BolisettyTejesh/voice-translator" target="_blank" rel="noopener noreferrer" className="btn-secondary featured-btn">
              <span>GitHub Repo</span>
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
