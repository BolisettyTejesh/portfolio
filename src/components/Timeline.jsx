import React from 'react';
import './Timeline.css';
import { GraduationCap, Trophy, Users, Star } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      title: "B.Tech in Computer Science and Engineering",
      date: "2023 – 2027",
      description: "Pursuing bachelor's degree with a focus on AI and modern web development.",
      icon: <GraduationCap />
    },
    {
      title: "Consolation Prize in 36-hour Hackathon",
      date: "Recent",
      description: "Built a highly functional agentic AI solution under intense time constraints, recognized for innovation.",
      icon: <Trophy />
    },
    {
      title: "Core Member of DataScience AI Dynamos Club",
      date: "Present",
      description: "Organizing workshops, mentoring peers, and driving AI initiatives on campus.",
      icon: <Users />
    },
    {
      title: "NSS Volunteer & CP Enthusiast",
      date: "Ongoing",
      description: "Active contributor to community service via NSS and consistently participating in coding contests.",
      icon: <Star />
    }
  ];

  return (
    <section id="timeline" className="section-padding">
      <div className="section-header text-center animate-fade-in">
        <h2 className="section-title">Timeline & <span className="text-gradient">Achievements</span></h2>
        <div className="section-line"></div>
      </div>
      
      <div className="timeline-container">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">
              {event.icon}
            </div>
            <div className="timeline-content glass-card">
              <span className="timeline-date">{event.date}</span>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
