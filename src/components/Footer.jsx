import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-branding">
          <h2 className="footer-logo" onClick={scrollToTop}>BM<span>.</span></h2>
          <h3>Brian Munyua</h3>
          <p className="footer-title">Full Stack Developer</p>
          <p className="footer-desc">
            Building modern web applications and crafting exceptional digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="footer-social-links">
            <a href="https://github.com/CaptainB3465" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:munyuabrian712@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="copyright">
          &copy; {currentYear} Brian Munyua. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
