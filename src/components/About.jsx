import React from 'react';
import './About.css';
import { User, Code, Server, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-header text-center animate-fade-in">
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        <div className="section-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text glass-card">
          <p>
            A passionate <strong>Computer Science Engineering student</strong> focused on AI systems, full-stack development, and scalable problem-solving. Strong interest in Agentic AI, modern web technologies, and competitive programming.
          </p>
          <p>
            Experienced in building intelligent applications, collaborative projects, and participating in hackathons and technical communities. I strive to write clean, maintainable code and architect resilient systems that deliver exceptional user experiences.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <Code className="highlight-icon" />
              <span>Full Stack Dev</span>
            </div>
            <div className="highlight-item">
              <Cpu className="highlight-icon" />
              <span>Agentic AI</span>
            </div>
            <div className="highlight-item">
              <Server className="highlight-icon" />
              <span>System Design</span>
            </div>
            <div className="highlight-item">
              <User className="highlight-icon" />
              <span>Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
