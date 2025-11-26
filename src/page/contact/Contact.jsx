import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="description">
          We look forward to hearing your opinions, questions, and suggestions. Please fill out the form below or use our direct contact information.
        </p>

        
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

    
        <div className="contact-info-section">
          <h2>Direct Contact Information</h2>
          <div className="info-cards">
            <div className="info-card">
              <h3>Email</h3>
              <p>ahmedmegahed580@gmail.com</p>
            </div>
            <div className="info-card">
              <h3>Phone Number</h3>
              <p>+20 1067688524 </p>
            </div>
            <div className="info-card">
              <h3>Working Hours</h3>
              <p>Sunday to Thursday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;