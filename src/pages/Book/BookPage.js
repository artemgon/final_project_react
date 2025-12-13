import React, { useState } from 'react';
import './BookPage.css';

function BookPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'classic',
    paymentMethod: 'credit-card'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="book-page">
      <div className="book-hero">
        <h1>Book Your Stay</h1>
      </div>

      <div className="book-content">
        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Booking Confirmed!</h2>
            <p>Thank you for your reservation at Hotel Parismo.</p>
            <p>A confirmation email has been sent to <strong>{formData.email}</strong>.</p>
            <div className="booking-details">
              <h3>Booking Details:</h3>
              <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Check-in:</strong> {formData.checkIn}</p>
              <p><strong>Check-out:</strong> {formData.checkOut}</p>
              <p><strong>Guests:</strong> {formData.guests}</p>
              <p><strong>Room Type:</strong> {formData.roomType}</p>
            </div>
            <button className="new-booking-button" onClick={resetForm}>
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <div className="form-left">
                <h3 className="section-title">Guest Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
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

              <div className="form-right">
                <h3 className="section-title">Stay Details</h3>
                
                <div className="dates-section">
                  <div className="date-group">
                    <div className="date-title">Check-in Date *</div>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="date-group">
                    <div className="date-title">Check-out Date *</div>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="roomType">Room Type *</label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      required
                    >
                      <option value="classic">Classic Room</option>
                      <option value="deluxe">Deluxe Room</option>
                      <option value="executive">Executive Room</option>
                      <option value="junior">Junior Suite</option>
                      <option value="connecting">Connecting Rooms</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="payment-section">
              <h3 className="payment-title">Payment Method</h3>
              <select
                className="payment-select"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="cash">Cash at Hotel</option>
              </select>
              
              <p className="payment-note">
                * Your payment will be processed upon arrival. No charges will be made at this time.
              </p>
            </div>

            <button 
              type="submit" 
              className="book-submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Complete Booking'}
            </button>
          </form>
        )}

        <div className="booking-image-section">
          <img src="/images/Book/Location.png" alt="Luxury Hotel Room" />
        </div>
      </div>
    </div>
  );
}

export default BookPage;