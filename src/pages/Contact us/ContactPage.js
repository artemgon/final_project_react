import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Валідація
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        {isSubmitted ? (
          <div className="contact-success-message">
            <div className="success-icon">✓</div>
            <h2>Your message was successfully sent!</h2>
            <p>Thank you for contacting Hotel Parismo. We will get back to you within 24 hours.</p>
            <button className="new-message-button" onClick={resetForm}>
              Send Another Message
            </button>
          </div>
        ) : (
          <div className="contact-form-section">
            <div className="contact-form-container">
              <h3 className="section-title">Get in Touch</h3>
              <p className="contact-intro">
                Have questions about your stay at Hotel Parismo? Our team is here to help.
                Fill out the form below and we'll respond as soon as possible.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                {error && <p className="form-error">{error}</p>}
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="group">Group Booking</option>
                      <option value="event">Event Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message..."
                    rows="6"
                  />
                </div>

                <button 
                  type="submit" 
                  className="contact-submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-info-container">
              <h3 className="section-title">Contact Information</h3>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <h4>Address</h4>
                  <p>15 Place Vendôme<br />75001 Paris, France</p>
                </div>
                
                <div className="contact-detail">
                  <h4>Phone</h4>
                  <p>+33 (0)1 47 00 05 02</p>
                </div>
                
                <div className="contact-detail">
                  <h4>Email</h4>
                  <p>parismo@contact.fr</p>
                </div>
                
                <div className="contact-detail">
                  <h4>Opening Hours</h4>
                  <p>Reception: 24/7<br />Concierge: 7:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="contact-note">
                <p>
                  <strong>For urgent matters:</strong> Please call our reception directly.
                  We recommend making restaurant and spa reservations in advance.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="contact-image-section">
          <img src="/images/Contact us/Contact.jpg" alt="Hotel Parismo Contact" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;