import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin, setSearchQuery }) => {
  const { getTotalQuantity } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();
  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (setSearchQuery) {
      setSearchQuery(searchText);
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo fade-in" />
      </Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`nav-item ${menu === "home" ? "active" : ""}`}>
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={`nav-item ${menu === "menu" ? "active" : ""}`}>
          Menu
        </a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={`nav-item ${menu === "mobile-app" ? "active" : ""}`}>
          Mobile App
        </a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={`nav-item ${menu === "contact-us" ? "active" : ""}`}>
          Contact Us
        </a>
      </ul>

      <div className="navbar-right fade-in">
        <img
          src={assets.search_icon}
          alt="search_icon"
          onClick={() => setShowSearch((prev) => !prev)}
          className="search-icon"
        />
        {showSearch && (
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search food..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">Go</button>
          </form>
        )}
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket_icon" />
          </Link>
          <div className={totalQuantity === 0 ? "dotHidden" : "dot bounce"}>
            <p>{totalQuantity}</p>
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
