'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <h1>Court and Corporate</h1>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isMobileMenuOpen ? 'active' : ''}>
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#venue">Venue</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#register" className="register-btn">Register</a>
        </nav>
      </div>
    </header>
  );
}
