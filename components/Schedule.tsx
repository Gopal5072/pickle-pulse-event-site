export default function Schedule() {
  const scheduleItems = [
    {
      time: "6:00 PM",
      title: "Welcome & Registration",
      description: "Check-in, welcome drinks, and casual networking",
      icon: "🎉"
    },
    {
      time: "6:30 PM",
      title: "Event Overview & Groups Formation",
      description: "Brief introduction and casual group assignments for better networking",
      icon: "👥"
    },
    {
      time: "7:00 PM",
      title: "Sports & Networking Session I",
      description: "Casual games of Pickleball, Chess, Pool, and Table Tennis with rotating partners",
      icon: "🏓"
    },
    {
      time: "8:00 PM",
      title: "Refreshment Break",
      description: "Light dinner, drinks, and structured networking opportunity",
      icon: "🍽️"
    },
    {
      time: "8:30 PM",
      title: "Sports & Networking Session II",
      description: "Continue playing with new partners and groups",
      icon: "🤝"
    },
    {
      time: "9:30 PM",
      title: "Social Hour",
      description: "Wind down with casual conversations and refreshments",
      icon: "🌟"
    },
    {
      time: "10:00 PM",
      title: "Event Conclusion",
      description: "Exchange contacts and farewell",
      icon: "👋"
    }
  ];

  return (
    <section id="schedule" className="schedule-section">
      <div className="schedule-bg"></div>
      <div className="schedule-container">
        <div className="schedule-header">
          <h2>Evening Schedule</h2>
          <p className="schedule-subtitle">A Relaxed Evening of Sports & Networking</p>
        </div>

        <div className="schedule-cards">
          {scheduleItems.map((item, index) => (
            <div key={index} className="schedule-card">
              <div className="card-icon">{item.icon}</div>
              <div className="time-badge">{item.time}</div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index !== scheduleItems.length - 1 && <div className="connector"></div>}
            </div>
          ))}
        </div>

        <div className="schedule-footer">
          <div className="info-card">
            <div className="info-icon">ℹ️</div>
            <p>Flexible timeline to ensure a relaxed networking experience</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🔄</div>
            <p>Feel free to move between different sports and networking groups</p>
          </div>
        </div>
      </div>
    </section>
  );
}
