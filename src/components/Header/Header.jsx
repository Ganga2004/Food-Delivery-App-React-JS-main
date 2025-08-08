import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-overlay" />
      <div className="header-contents">
        <span className="header-badge">🔥 Fresh • Fast • Flavorful</span>
        <h2 className="fade-slide">Welcome to <span style={{ color: '#ff4f3c' }}>FoodieFiesta</span></h2>
        <p className="fade-slide delay-1">
          Craving something delicious? Discover your next favorite meal from FoodieFiesta — your go-to destination for mouth-watering dishes, speedy delivery, and food made with love. Taste the joy in every bite!
        </p>
        <div className="header-actions fade-slide delay-2">
          <a href="#explore-menu">
            <button className="primary-btn">Explore the Menu</button>
          </a>
          <a href="#app-download">
            <button className="secondary-btn">Get Our App</button>
          </a>
        </div>
        <div className="rating-info fade-slide delay-3">
          ⭐ Trusted by 10,000+ food lovers • Rated 4.9/5!
        </div>
      </div>
    </header>
  );
};

export default Header;
