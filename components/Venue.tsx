export default function Venue() {
  const venueImages = [
    '/images/venue1.webp',
    '/images/venue3.webp',
    '/images/venue4.webp',
    '/images/venue5.webp',
    '/images/venue6.webp',
    '/images/venue7.webp'
  ];

  return (
    <section id="venue" className="venue-section">
      <div className="venue-container">
        <div className="venue-header">
          <h2>Our Venue</h2>
          <div className="venue-intro">
            <h3>Two88 On the way The Pickleball Lounge Club</h3>
            <p>Experience pickleball in a premium setting with state-of-the-art facilities.</p>
          </div>
        </div>

        <div className="venue-grid">
          <div className="venue-features-card">
            <div className="features-content">
              <h4>Amenities</h4>
              <ul className="venue-features">
                <li>Professional courts</li>
                <li>Comfortable seating areas</li>
                <li>Premium refreshments</li>
                <li>Networking spaces</li>
              </ul>
            </div>
          </div>
          
          <div className="venue-gallery">
            {venueImages.map((image, index) => (
              <div key={index} className="venue-image-wrapper">
                <img 
                  src={image} 
                  alt={`Venue view ${index + 1}`}
                  className="venue-image"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>
            ))}
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
    </section>
  );
}