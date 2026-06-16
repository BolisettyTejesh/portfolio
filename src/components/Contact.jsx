import React, { useState } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    
    // Web3Forms access key (You need to get this from web3forms.com)
    // Replace the string below with your actual access key
    formData.append("access_key", "c3f7ae5a-3d7d-400a-ba4c-3e3a401204b0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-header text-center animate-fade-in">
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        <div className="section-line"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info glass-card">
          <h3>Let's Connect</h3>
          <p className="contact-description">
            I'm currently seeking new opportunities and open to exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <Mail />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="mailto:2300030088cse3@gmail.com">2300030088cse3@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <Phone />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <a href="tel:+918885266063">+91 8885266063</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form glass-card" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Hello, I'd like to talk about..." required></textarea>
          </div>
          
          <button type="submit" className="btn-primary submit-btn">
            Send Message <Send size={18} />
          </button>
          
          {result && (
            <div className={`form-result ${result.includes("Successfully") ? "success" : "error"}`} style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
