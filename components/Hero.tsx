'use client';

export default function Hero() {
  const handleScrollToRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const registerSection = document.querySelector('#register');
    
    if (registerSection) {
      const headerOffset = 80;
      const elementPosition = registerSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Court and Corporate</h1>
        <p className="hero-tagline">Where Business meets sports!</p>
        <p className="hero-date">30 August 2025 | Gurugram</p>
        <div className="hero-cta">
          <a 
            href="#register" 
            onClick={handleScrollToRegister}
            className="hero-cta-button"
            aria-label="Request event invitation"
          >
            Request Invite
          </a>
        </div>
      </div>
    </section>
  );
}
