import React from 'react';
import './Projects.css';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: "AquaMyst — The Hidden Ocean Interpreter",
      description: "Developed a multi-agent AI platform using LangGraph, Ollama, PostgreSQL, and PostGIS to autonomously analyze oceanographic datasets with structured AI reasoning pipelines and collaborative intelligent agents.",
      techStack: ["Python", "LangGraph", "Ollama", "PostgreSQL", "PostGIS", "FastAPI"],
      features: [
        "Multi-agent workflows",
        "AI reasoning pipelines",
        "Ocean intelligence analytics",
        "Local LLM integration"
      ],
      github: "#",
      live: "#"
    },
    {
      title: "Online Job Application Tracker",
      description: "Built a full-stack web application using React, Spring Boot, and MySQL for tracking job applications with dynamic notifications and efficient database management.",
      techStack: ["React JS", "Spring Boot", "MySQL", "Vanilla CSS"],
      features: [
        "REST APIs",
        "Dynamic notifications",
        "Authentication system",
        "Responsive dashboard"
      ],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-header text-center animate-fade-in">
        <h2 className="section-title"><span className="text-gradient">Other</span> Projects</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div className="project-card glass-card" key={index}>
            <div className="project-content">
              <div className="project-header">
                <Layers className="project-icon" />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink />
                  </a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <span className="feature-dot"></span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech-stack">
                {project.techStack.map((tech, tIndex) => (
                  <span className="tech-badge" key={tIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
