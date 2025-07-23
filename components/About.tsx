export default function About() {
  const sports = [
    { name: 'Pickleball', icon: '🏓' },
    { name: 'Chess', icon: '♟️' },
    { name: 'Pool', icon: '🎱' },
    { name: 'Table Tennis', icon: '🏓' }
  ];

  const visionPoints = [
    'Foster Business Relationships',
    'Enhance Professional Network',
    'Promote Active Lifestyle',
    'Create Lasting Connections'
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About Court and Corporate</h2>
          <p className="about-subtitle">Where Business Meets Sports!</p>
        </div>

        <div className="about-content">
          <div className="about-main-card">
            <h3>The Event</h3>
            <p>
              <strong>Court and Corporate</strong>, organized by <strong>Transcurators</strong>, 
              brings together <strong>C-suite executives</strong>, <strong>VPs</strong>, and 
              <strong> senior professionals</strong> for an extraordinary day of sports and networking.
            </p>
            <div className="sports-tags">
              {sports.map((sport, index) => (
                <span key={index} className="sport-tag">
                  {sport.icon} {sport.name}
                </span>
              ))}
            </div>
          </div>

          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              At <strong>Court and Corporate</strong>, we believe in the power of sports 
              to foster meaningful business relationships and personal growth in a dynamic, 
              engaging environment.
            </p>
            <ul className="vision-points">
              {visionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="activities-card">
            <h3>What to Expect</h3>
            <div className="activities-grid">
              <div className="activity-item">
                <h4>Competitive Sports</h4>
                <p>Engage in friendly tournaments across multiple sports disciplines</p>
              </div>
              <div className="activity-item">
                <h4>Networking</h4>
                <p>Connect with industry leaders in a relaxed, sporting environment</p>
              </div>
              <div className="activity-item">
                <h4>Professional Growth</h4>
                <p>Build relationships that extend beyond the playing field</p>
              </div>
              <div className="activity-item">
                <h4>Well-being</h4>
                <p>Promote active lifestyle while expanding your professional network</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <a href="#register" className="about-cta-button">
            Join the Event
          </a>
          <p className="cta-subtitle">Limited spots available</p>
        </div>
      </div>
    </section>
  );
}
