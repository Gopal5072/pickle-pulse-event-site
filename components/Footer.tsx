export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2025 Transcurators. All rights reserved.</p>
        
        {/* Shortcuts Section */}
        <div className="footer-shortcuts">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="footer-socials">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
        
        {/* Privacy and Terms Links */}
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
