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
      description: "Light refreshments and structured networking opportunity",
      icon: "☕"
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
      <div className="schedule-container">
        <div className="schedule-header">
          <h2>Event Timeline</h2>
          <p className="schedule-subtitle">A well-planned evening of networking and sports</p>
        </div>
        
        <div className="timeline">
          {scheduleItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-icon">{item.icon}</span>
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
