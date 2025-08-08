import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer id="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="FoodieFiesta Logo" />
          <p>
            Crafted with 💖 by Ganga Shanker Shukla — a passionate developer
            from Prayagraj, bringing you FoodieFiesta, where tech meets taste.
            Built using React, Firebase & love for clean UI.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/gangashankershukla" target="_blank" rel="noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => window.scrollTo(0, 0)}>About Developer</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>📞 +91-9517386496</li>
            <li>📧 gangashankershukla02072004@gmail.com</li>
            <li>📍 Prayagraj, India</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        © 2025 FoodieFiesta.com • Designed & Developed by Ganga Shanker Shukla
      </p>
    </footer>
  );
};

export default Footer;
