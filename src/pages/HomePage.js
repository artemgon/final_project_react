import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="content">
        <div className="hotel-title">
          <h1>Hotel Parismo</h1>
        </div>

        <section className="main-image">
          <img src="/images/Hotel Parismo.png" alt="Hotel Parismo Exterior" />
        </section>

        <h3 className="section-title">A Unique Place for an Unforgettable Stay</h3>
        <p className="first-text">
          Overlooking the Place Vendôme, this iconic hotel from 1898 is located 1 km from the Louvre and the shops of the Champs-Élysées.
          The elegant rooms feature French decor in pastel tones, with paintings and antique furniture.
          They include Wi-Fi access and a marble bathroom.
          The sophisticated suites include a separate living area, and some have a private terrace with garden views.
          The luxurious themed high-category suites enjoy views of the Place Vendôme.
          The hotel boasts a brasserie, 2 upscale restaurants, several lounges, and 2 bars, one of which is inspired by Hemingway.
          It also features an elegant indoor swimming pool, a gym, and a chic spa offering Chanel beauty treatments.
        </p>

        <hr className="divider" />

        <h3 className="section-title">An Unforgettable Experience</h3>
        <p className="large-text">
          The refinement of French savoir-vivre, the elegance of a Belle Époque decor, 
          rooms and suites with absolute comfort bear the names of Coco Chanel, 
          F. Scott Fitzgerald, or Marcel Proust, who were at the Ritz "as at home".
        </p>

        <section className="room-section">
          <div className="room-image-container">
            <img src="/images/Room 1.png" alt="Luxury Room" />
            <div className="room-overlay">
              <span className="room-title">Rooms & Suites</span>
            </div>
          </div>
          <button className="reserve-button">Book Now</button>
        </section>

        <hr className="divider" />

        <h3 className="section-title">The New Parismo Bar</h3>
        <p>
          On September 27, 2021, during Paris Fashion Week, the Ritz Paris inaugurated a new meeting place on the Parisian calendar, with an unprecedented, intimate Ritz Bar and a spectacular ritual.
          A tribute to César Ritz, a visionary and pioneer gentleman in electricity and hospitality, the Ritz Bar reinterprets the spirit of the Belle Époque, carried by progress, fantasy, and the magic of divinatory sciences.
        </p>
        <section className="image-section">
          <img src="/images/Bar.png" alt="Parismo Bar" />
        </section>

        <hr className="divider" />

        <h3 className="section-title">Parismo Paris Le Comptoir</h3>
        <p>
          The Ritz Paris inaugurates a new chapter in its history with the opening of Ritz Paris Le Comptoir.
          A stone's throw from Place Vendôme, this contemporary boutique, a symbol of sharing and conviviality,
          addresses all Parisians in search of the best of French pastry and the excellence of Prismo Paris.
        </p>

        <hr className="divider" />

        <h3 className="section-title">Original Creations</h3>
        <p>
          Beyond its iconic pastries - marbled cake, milk Ritz,
          caramel barquette... - François Perret imagined exclusive
          creations like chocolate breads and slender sandwiches
          or pastry drinks...
          without forgetting his delicious madeleines with melting heart!
        </p>
        <section className="image-section">
          <img src="/images/Shop.png" alt="Pastry Creations" />
        </section>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="follow-section">
            <span className="follow-text">Follow Parismo! Subscribe to Newsletter!</span>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button className="newsletter-button">OK</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Hotel Parismo, 2021 - Privacy Policy - Legal Notice 15 Place Vendôme 75001 Paris tel: 01-47-00-05-02 Email: parismo@contact.fr</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;