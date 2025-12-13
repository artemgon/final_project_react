import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomsPage.css';

function RoomsPage() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book');
  };

  return (
    <div className="rooms-page">
      <div className="rooms-hero">
        <h1>Our Rooms</h1>
      </div>

      <div className="rooms-content">
        <div className="room-card">
          <div className="room-image">
            <img src="/images/Rooms/Room 2.png" alt="Classic Room" />
          </div>
          <div className="room-info">
            <h2>THE CLASSIC ROOM</h2>
            <hr className="room-divider" />
            <p>
              Monsieur George offers travelers a peaceful haven just steps from the hustle and bustle of the Champs-Élysées. 
              The room decoration stages the meeting of London and Paris: checkerboard floors, black lacquers and mirrors. 
              They offer well-deserved rest for lovers or night owls. Some with a balcony overlook Washington Street.
            </p>
            <button className="room-book-button" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>

        {/* Deluxe Room */}
        <div className="room-card">
          <div className="room-image">
            <img src="/images/Rooms/Room 3.png" alt="Deluxe Room" />
          </div>
          <div className="room-info">
            <h2>THE DELUXE ROOM</h2>
            <hr className="room-divider" />
            <p>
              Monsieur George designed these bright rooms so that one feels both elsewhere and at home. 
              The studded mirrors and skylights offer a play of light and transparency. 
              A bubble of tranquility, the Grand Siècle in a cocoon. Here, everything is luxury, calm, and pleasure. 
              Most rooms have a balcony or bow-window.
            </p>
            <button className="room-book-button" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>

        <div className="room-card">
          <div className="room-image">
            <img src="/images/Rooms/Room 4.png" alt="Executive Room" />
          </div>
          <div className="room-info">
            <h2>THE EXECUTIVE ROOM</h2>
            <hr className="room-divider" />
            <p>
              Sheltered behind Haussmann double windows, Monsieur George has prepared comfortable rooms to welcome his distinguished guests. 
              The lacquered furniture and thick velvet curtains are reflected in the vast mirrors and create a soothing atmosphere. 
              The bathroom, entirely in black stone with golden faucets, offers a refined setting.
            </p>
            <button className="room-book-button" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>

        <div className="room-card">
          <div className="room-image">
            <img src="/images/Rooms/Room 5.png" alt="Junior Suite" />
          </div>
          <div className="room-info">
            <h2>THE JUNIOR SUITE</h2>
            <hr className="room-divider" />
            <p>
              Nestled on the top floor, the whiteness of Monsieur George's suites harmonizes with the color of the clouds. 
              In the distance, the roofs of the capital form a living tableau. 
              Protected in their padded shelter, Monsieur's friends dream from their balcony, Paris at their feet. 
              Large white marble mirrors, a clean design.
            </p>
            <button className="room-book-button" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>

        <div className="room-card">
          <div className="room-image">
            <img src="/images/Rooms/Room 6.png" alt="Connecting Rooms" />
          </div>
          <div className="room-info">
            <h2>CONNECTING ROOMS</h2>
            <hr className="room-divider" />
            <p>
              Monsieur George, a seasoned traveler himself, thinks of those who travel in groups or with family. 
              For this, he has designed apartments with two connecting rooms, sharing a common entrance but with a distinct style for each. 
              To travel together, while each being in their own home.
            </p>
            <button className="room-book-button" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>
      </div>

      <footer className="rooms-footer">
        <div className="rooms-footer-content">
          <h2 className="footer-hotel-name">Hotel Parismo</h2>
          <p className="footer-follow-text">Follow Parismo</p>
        </div>
      </footer>
    </div>
  );
}

export default RoomsPage;