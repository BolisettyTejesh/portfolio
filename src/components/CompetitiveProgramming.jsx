import React from 'react';
import './CP.css';
import { Terminal, Award, FastForward, Code } from 'lucide-react';

const CompetitiveProgramming = () => {
  const profiles = [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/klu2300030088/",
      stats: "200+ Solved",
      color: "#f89f1b",
      icon: <Code />
    },
    {
      platform: "CodeChef",
      url: "https://www.codechef.com/users/klu_2300030088",
      stats: "Max Rating: 1500+",
      color: "#5B4638",
      icon: <Award />
    },
    {
      platform: "HackerRank",
      url: "https://www.hackerrank.com/profile/h2300030088",
      stats: "5 Star SQL",
      color: "#2EC866",
      icon: <Terminal />
    }
  ];

  return (
    <section id="cp" className="section-padding">
      <div className="section-header text-center animate-fade-in">
        <h2 className="section-title">Competitive <span className="text-gradient">Programming</span></h2>
        <div className="section-line"></div>
      </div>
      
      <div className="cp-grid">
        {profiles.map((profile, index) => (
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cp-card glass-card"
            key={index}
            style={{"--hover-color": profile.color}}
          >
            <div className="cp-icon" style={{color: profile.color}}>
              {profile.icon}
            </div>
            <h3 className="cp-platform">{profile.platform}</h3>
            <p className="cp-stats">{profile.stats}</p>
            <div className="cp-link-indicator">
              View Profile <FastForward size={14} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
