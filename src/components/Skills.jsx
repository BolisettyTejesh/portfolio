import React from 'react';
import './Skills.css';
import { Database, Layout, Code2, Cpu, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="skill-cat-icon" />,
      skills: ["Java", "C", "SQL", "Python"]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="skill-cat-icon" />,
      skills: ["React JS", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend & DB",
      icon: <Database className="skill-cat-icon" />,
      skills: ["Spring Boot", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
      title: "AI & Tools",
      icon: <Cpu className="skill-cat-icon" />,
      skills: ["LangGraph", "Ollama", "Agentic AI", "VS Code", "Eclipse IDE", "Git & GitHub"]
    },
    {
      title: "Core CS",
      icon: <BookOpen className="skill-cat-icon" />,
      skills: ["Data Structures & Algorithms", "DBMS", "OOP"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-header text-center animate-fade-in">
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
        <div className="section-line"></div>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card glass-card" key={index} style={{animationDelay: `${index * 0.1}s`}}>
            <div className="skill-card-header">
              <div className="icon-wrapper">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, sIndex) => (
                <span className="skill-tag" key={sIndex}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
