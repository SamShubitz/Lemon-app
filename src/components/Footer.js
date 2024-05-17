export default function Footer() {
    return (
      <footer className="app-footer">
        <img className="footer-logo" src="/logomonochrome.png" alt="logo"/>
        <nav className="overview-nav">
          <h4>Overview</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order online</li>
            <li>Log in</li>
          </ul>
        </nav>
        <nav className="contact-nav">
          <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </nav>
        <nav className="social-nav">
          <h4>Social Media</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </nav>
      </footer>
    );
}