import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/home">
          <h1>BeyondBorders</h1>
        </Link>
      </div>
      <div className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/home" onClick={closeMenu}>Home</Link>
        <Link to="/events" onClick={closeMenu}>Events</Link>
        <Link to="/pricing" onClick={closeMenu}>Subscriptions</Link>
        <Link to="/home" onClick={closeMenu}>Latest</Link>
        <Link to="/events" onClick={closeMenu}>My List</Link>
      </div>
      <div className="navbar__menu-toggle" onClick={toggleMenu}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="menu-icon"
        >
          <path d="M4 6h16M4 12h16M4 18h16" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="navbar__profile">
        <Link to="/profile">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="profile-icon"
          >
            <circle cx="12" cy="8" r="4" stroke="#e5e5e5" strokeWidth="2" />
            <path
              d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8"
              stroke="#e5e5e5"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
