import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content animate-fade-in">
          <h2 className="hero-subtitle">Hello, I'm</h2>
          <h1 className="hero-title">Brian <span>Munyua</span></h1>
          <h3 className="hero-typing">Full Stack Developer</h3>
          <p className="hero-description">
            I build scalable web applications and craft exceptional digital experiences 
            with modern technologies.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="hero-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Munyua W. Brian">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="captain_b.25">IG</a>
            <a href="https://github.com/CaptainB3465" target="_blank" rel="noreferrer" title="GitHub">GH</a>
          </div>
        </div>
        <div className="hero-image-container animate-fade-in">
          <div className="image-frame">
            <img src={profileImg} alt="Brian Munyua" className="profile-img" />
          </div>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
