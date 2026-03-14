import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'JS' },
    { name: 'React', icon: 'RE' },
    { name: 'Spring Boot', icon: 'SB' },
    { name: 'PostgreSQL', icon: 'PS' },
    { name: 'Windows Installation', icon: 'WIN' },
    { name: 'Driver Installation', icon: 'DRV' },
    { name: 'Computer Formatting', icon: 'FMT' },
    { name: 'Software Installation', icon: 'SW' },
    { name: 'Git', icon: 'GT' }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card glass-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
