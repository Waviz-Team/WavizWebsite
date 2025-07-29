// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Waviz</Link>
      </div>
      <div>
        <Link to="/docs">Docs</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">Team</Link>
        <a
          href="https://github.com/Waviz-Team"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
