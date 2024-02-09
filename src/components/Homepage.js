// HomePage.js

import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Our Construction Website</h1>
        <p>Your Trusted Partner in Construction Services</p>
        <a href="#services" className="cta-button">Explore Services</a>
      </header>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Construction Management</h3>
          <p>We provide top-notch construction management services to ensure your project's success.</p>
        </div>
        <div className="service">
          <h3>Design and Build</h3>
          <p>Our design and build approach streamlines the construction process, saving time and resources.</p>
        </div>
        {/* Add more services as needed */}
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have a project in mind? Reach out to us for a consultation.</p>
        <a href="#contact" className="cta-button">Contact Now</a>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Construction Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
