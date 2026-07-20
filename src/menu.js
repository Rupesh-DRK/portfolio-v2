import { useState } from 'react';
import './App.css';
import './menu.css';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-inner">
        <a href="#home" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="navbar-dots">
            <span></span><span></span><span></span>
          </span>
          drk_rupesh_kumar
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i className={open ? 'icon-close' : 'icon-menu'} aria-hidden="true"></i>
        </button>

        <div className={`navbar-links${open ? ' is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
