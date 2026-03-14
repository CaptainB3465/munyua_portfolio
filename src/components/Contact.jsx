import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info glass-card">
          <h3>Contact Detail</h3>
          <div className="info-item">
            <p className="info-label">Email</p>
            <p className="info-value">munyuabrian712@gmail.com</p>
          </div>
          <div className="info-item">
            <p className="info-label">Phone</p>
            <p className="info-value">0719328502</p>
          </div>
          <div className="info-item">
            <p className="info-label">Location</p>
            <p className="info-value">Available Globally</p>
          </div>
        </div>
        <div className="contact-container glass-card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
