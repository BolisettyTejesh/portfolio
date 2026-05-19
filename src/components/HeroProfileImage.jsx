import React from 'react';
import './HeroProfileImage.css';

const HeroProfileImage = () => {
  return (
    <div className="hero-image-wrapper animate-fade-in">
      <div className="hero-image-container">
        <div className="hero-image-glow"></div>
        <div className="hero-image-ring"></div>
        <img src="/Teja_Suit.png" alt="Bolisetty Tejesh" className="hero-profile-image" />
        
        {/* Ambient Particles */}
        <div className="particles-container">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroProfileImage;
