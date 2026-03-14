import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text glass-card">
          <p>
            Hello! I'm Brian Munyua, a passionate software developer who loves 
            building clean, functional, and scalable web applications. My journey 
            in tech is driven by a curiosity for how things work and a desire 
            to solve real-world problems through code.
          </p>
          <p>
            I specialize in crafting high-quality applications using <strong>JavaScript</strong>, 
            <strong>React</strong>, <strong>Spring Boot</strong>, and <strong>PostgreSQL</strong>. 
            I'm committed to continuous learning and staying updated with the 
            latest industry trends.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card glass-card">
            <h3>3+</h3>
            <p>Major Projects</p>
          </div>
          <div className="stat-card glass-card">
            <h3>6+</h3>
            <p>Tech Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
