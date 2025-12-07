import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="hotel-name">Hotel Parismo</span>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/rooms">Rooms & Suites</a></li>
          <li><a href="/book">Book</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;