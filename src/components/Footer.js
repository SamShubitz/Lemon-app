import Nav from "./Nav";

export default function Footer() {
    return (
      <footer className="app-footer">
        <img className="footer-logo" src="/logomonochrome.png" alt="logo"/>
        <div className="footer-nav-section">
          <h4>Overview</h4>
          <Nav className="footer-nav"/>
        </div>
        <div className="contact-nav-section">
          <nav className="contact-nav">
            <h4>Contact</h4>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </nav>
        </div>
        <div className="social-nav-section">
          <nav className="social-nav">
            <h4>Social Media</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </nav>
        </div>
      </footer>
    );
}