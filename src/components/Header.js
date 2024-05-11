export default function Header() {
    return (
      <header className="app-header">
        <img className="header-image" src="/Logo.svg" alt="logo"/>
        <nav className="header-nav">
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    );
  }