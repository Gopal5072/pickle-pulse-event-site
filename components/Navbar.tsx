export default function Navbar() {
  return (
    <header>
      <div className="nav-container">
        <h1>PicklePulse</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#venue">Venue</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#register" className="text-yellow-500 font-bold">Register</a>
        </nav>
      </div>
    </header>
  );
}
