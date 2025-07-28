import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin ,FaGithub , FaFacebook } from 'react-icons/fa';

function Contact() {
  return (
    <div className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Fill up the form and I will get back to you, or simply contact me directly.</p>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+216 29647250 </span>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>hamzabeji001@gmail.com </span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Gabès, Tunisia </span>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/hamza-beji-b92602227/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/hamzabl8r" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/tnxbeji" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
          
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;