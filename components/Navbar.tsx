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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    
    if (section) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      
      // Calculate offset for fixed header
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}><h1>Court and Corporate</h1></a>
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
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#schedule" onClick={(e) => handleNavClick(e, '#schedule')}>Schedule</a>
          <a href="#venue" onClick={(e) => handleNavClick(e, '#venue')}>Venue</a>
          <a href="#sponsors" onClick={(e) => handleNavClick(e, '#sponsors')}>Sponsors</a>
          <a href="#register" onClick={(e) => handleNavClick(e, '#register')} className="register-btn">Register</a>
        </nav>
      </div>
    </header>
  );
}
