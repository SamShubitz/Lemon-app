import Nav from './Nav.js';
import HamburgerIcon from './HamburgerIcon.js';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };
  let location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

    return (
      <header className="app-header">
        <Link to="/"><img className="header-image" src="/logo.svg" alt="logo"/></Link>
        <Nav className="header-nav"/>
        <HamburgerIcon className="hamburger" aria-haspopup="true" aria-expanded={isOpen} onClick={toggleBurger}/>
        {isOpen && (
          <Nav className="dropdown-nav"/>
        )}
      </header>
    );
  }