import Nav from './Nav.js'
import HamburgerIcon from './HamburgerIcon.js';

export default function Header() {
    return (
      <header className="app-header">
        <img className="header-image" src="/Logo.svg" alt="logo"/>
        <Nav />
        <HamburgerIcon className="hamburger"/>
      </header>
    );
  }