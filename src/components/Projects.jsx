import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Inventory Management System',
      description: 'A comprehensive system for tracking stock levels, orders, and sales with real-time updates.',
      tech: ['React', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/CaptainB3465'
    },
    {
      title: 'Student Management System',
      description: 'An educational platform to manage student records, course enrollments, and performance tracking.',
      tech: ['Java', 'Spring Boot', 'Next.js'],
      github: 'https://github.com/CaptainB3465'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and Vite to showcase software engineering skills.',
      tech: ['React', 'Vite', 'Vanilla CSS'],
      github: 'https://github.com/CaptainB3465'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <a href={project.github} className="btn-github">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
