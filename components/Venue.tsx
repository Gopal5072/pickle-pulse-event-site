export default function Venue() {
  const venueFeatures = [
    { 
      icon: "🏸", 
      title: "Professional Courts", 
      desc: "4 state-of-the-art pickleball courts with professional lighting" 
    },
    { 
      icon: "🪑", 
      title: "Lounge Area", 
      desc: "Comfortable seating and networking spaces for participants" 
    },
    { 
      icon: "🎮", 
      title: "Game Zone", 
      desc: "Professional pool tables and chess stations for strategic gameplay" 
    },
    { 
      icon: "🤝", 
      title: "Networking Areas", 
      desc: "Dedicated spaces for business discussions and casual networking" 
    },
    { 
      icon: "🎯", 
      title: "Multi-Purpose Space", 
      desc: "Flexible areas that adapt to various activities and group sizes" 
    }
  ];

  const venueImages = [
    '/images/venue1.webp',
    '/images/venue3.webp',
    '/images/venue4.webp',
    '/images/venue5.webp',
    '/images/venue6.webp'
  ];

  return (
    <section id="venue" className="venue-section">
      <div className="venue-container">
        <div className="venue-header">
          <h2>Our Venue</h2>
          <div className="venue-intro">
            <h3>Two88 On the way The Pickleball Lounge Club</h3>
            <p>Where Sports Meets Business Networking</p>
          </div>
        </div>

        <div className="venue-content">
          <div className="venue-main">
            <img 
              src="/images/venue1.webp" 
              alt="Two88 Pickleball Club Main View"
              className="venue-main-image" 
            />
          </div>

          <div className="venue-features">
            {venueFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="venue-gallery">
            {venueImages.slice(1).map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image} 
                  alt={`Venue view ${index + 2}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="venue-location">
          <div className="location-info">
            <h3>Location Details</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <p>Two88 On the way, Sector 88, Gurugram</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🚗</span>
                <p>Ample parking available</p>
              </div>
              <div className="info-item">
                <span className="info-icon">🚇</span>
                <p>15 mins from Rapid Metro Station</p>
              </div>
            </div>
          </div>
          
          <div className="venue-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4330.56546381995!2d77.0698173!3d28.4401847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1900107886dd%3A0xd6493823018abf9!2sTwo88%20On%20the%20way%20The%20Pickleball%20Lounge%20Club!5e1!3m2!1sen!2sin!4v1753102892622!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="venue-map-frame"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}