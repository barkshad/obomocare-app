import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Logo } from './Logo';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Our work' },
  { to: '/sponsorship', label: 'Sponsorship' },
  { to: '/impact', label: 'Impact' },
  { to: '/budget', label: 'Budget' },
  { to: '/faq', label: 'FAQ' },
  { to: '/stories', label: 'Stories' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/get-involved', label: 'Get involved' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <ReactRouterDOM.Link to="/" className="nav__logo" aria-label="OBOMOCARE home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </ReactRouterDOM.Link>

        <button
          className={`nav__toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className="nav__toggle__bar"></span>
        </button>

        {menuOpen && <div className={`nav__backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />}

        <ul className={`nav__menu ${menuOpen ? 'open' : ''}`} id="nav-menu" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <ReactRouterDOM.Link to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </ReactRouterDOM.Link>
            </li>
          ))}
          <li>
            <ReactRouterDOM.Link to="/get-involved" className="btn btn--accent" onClick={() => setMenuOpen(false)}>
              Support us
            </ReactRouterDOM.Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

